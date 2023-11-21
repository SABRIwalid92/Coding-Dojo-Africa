from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = "it's a secret"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/submit", methods=["POST"])
def submit():
    session["Name"] = request.form["Name"]
    session["Dojo_Location"] = request.form["Dojo_Location"]
    session["Favorite_Language"] = request.form["Favorite_Language"]
    session["Comment"] = request.form["Comment"]
    return redirect("/result")


@app.route("/result")
def result():
    return render_template("result.html")


if __name__ == "__main__":
    app.run(debug=True)
