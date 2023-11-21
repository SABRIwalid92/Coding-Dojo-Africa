from flask import Flask, render_template  # Import Flask to allow us to create our app

app = Flask(__name__)  # Create a new instance of the Flask class called "app"


@app.route(
    "/"
)  # The "@" decorator associates this route with the function immediately following
def index():
    return render_template(
        "index.html"
    )  # Return the string 'Hello World!' as a response


@app.route("/play/")
def play():
    return render_template("play.html")


@app.route("/play/<int:x>")
def play1(x):
    return render_template("play.html", x=x)


@app.route("/play/<int:x>/<string:color>")
def play2(x, color):
    return render_template("play.html", x=x, color=color)


if (
    __name__ == "__main__"
):  # Ensure this file is being run directly and not from a different module
    app.run(debug=True)  # Run the app in debug mode.
