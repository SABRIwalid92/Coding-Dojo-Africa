from flask import Flask, render_template, redirect, request, session
from mysqlconnection import connectToMySQL
from flask import flash


app = Flask(__name__)
app.secret_key = "it's a secret"


class Dojo:
    DB = "dojo_survey_schema"

    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.location = data["location"]
        self.language = data["language"]
        self.comment = data["comment"]

    @classmethod
    def save(cls, data):
        query = """
                INSERT INTO dojos (name, location, language, comment)
                VALUES (%(name)s, %(location)s, %(language)s, %(comment)s)
                """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = """
                SELECT * FROM dojos
                """
        results = connectToMySQL(cls.DB).query_db(query)
        dojos = []
        for result in results:
            dojos.append(cls(result))
        return dojos

    @classmethod
    def get_dojo_by_id(cls, data):
        query = """
                     SELECT * FROM dojos
                    WHERE dojos.id = %(id)s;
                """
        result = connectToMySQL(cls.DB).query_db(query, data)
        if len(result) < 1:
            return False

        return cls(result[0])

    # * ========= USER VALIDATOR =========
    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["name"]) < 1:
            is_valid = False
            flash("name Required !")
        if len(data["location"]) < 1:
            is_valid = False
            flash("location Required !")
        if len(data["language"]) < 1:
            flash("language Required !")
            is_valid = False
        if len(data["comment"]) < 1:
            flash("comment Required !")
            is_valid = False
        return is_valid


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/submit", methods=["POST"])
def submit():
    if not Dojo.validate(request.form):
        return redirect("/")
    session["id"] = Dojo.save(request.form)
    return redirect("/result")


@app.route("/result")
def result():
    return render_template(
        "result.html", dojo=Dojo.get_dojo_by_id({"id": session["id"]})
    )


if __name__ == "__main__":
    app.run(debug=True)
