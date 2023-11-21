from flask import Flask, render_template, redirect, request, session
import random

app = Flask(__name__)
app.secret_key = "it's a secret"


@app.route("/")
def index():
    feedback = "Guess"
    color = "gray"
    if not "attemps" in session:
        session["attemps"] = 0
    if not "show" in session:
        session["show"] = ""
    session["show"] = "none"
    if not "x" in session:
        session["x"] = random.randint(1, 100)
    x = session["x"]
    x1 = int(x)
    if not "y" in session:
        session["y"] = 0
    y1 = int(session["y"])
    if y1 > x1:
        feedback = "too HIGH!"
        color = "red"
    elif y1 < x1:
        feedback = "too LOW!"
        color = "red"
    else:
        "CORRECT!"
        color = "green"
        session["show"] = ""
    if session["attemps"] > 4:
        feedback = "YOU LOSE!"
        session["show"] = ""
        color = "yellow"

    return render_template("index.html", feedback=feedback, color=color)


@app.route("/guess", methods=["POST"])
def guess():
    session["y"] = 0
    session["y"] = request.form["x_guess"]
    session["attemps"] = int(session["attemps"]) + 1

    return redirect("/")


@app.route("/play_again")
def play_again():
    session.pop("x")
    session.pop("y")
    session.pop("show")
    session.pop("attemps")
    session["show"] = "block"
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
