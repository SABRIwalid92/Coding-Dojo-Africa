from flask import Flask  # Import Flask to allow us to create our app

app = Flask(__name__)  # Create a new instance of the Flask class called "app"


@app.route(
    "/"
)  # The "@" decorator associates this route with the function immediately following
def hello_world():
    return "Hello World!"  # Return the string 'Hello World!' as a response


@app.route("/dojo")
def dojo():
    return "Dojo"


@app.route("/say/<string:here>")
def say(here):
    return f"Hi {here}"


@app.route("/repeat/<int:num>/<string:word>")
def repeat(num, word):
    return f"{word }" * num


@app.errorhandler(404)
def page_not_found(error):
    return "This page does not exist", 404


if (
    __name__ == "__main__"
):  # Ensure this file is being run directly and not from a different module
    app.run(debug=True)  # Run the app in debug mode.
