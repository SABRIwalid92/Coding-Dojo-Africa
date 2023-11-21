from flask import (
    Flask,
    render_template,
    redirect,
    request,
    session,
)


app = Flask(__name__)  # Create a new instance of the Flask class called "app"
app.secret_key = "it's a secret"  # set a secret key for security purposes


@app.route("/")
def index():
    if "counter" in session:
        session["counter"] += 1
    else:
        session["counter"] = 0

    # my_var = request.form["increment_val"]
    # if int(request.form["increment_val"]):
    #     session["increment_val"] = int(request.form["increment_val"])
    #     print(request.form["increment_val"], my_var)

    return render_template("index.html")


@app.route("/plus2")
def plus2():
    session["counter"] += 2

    return render_template("index.html")


@app.route("/destroy_session")
def clear_session():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
