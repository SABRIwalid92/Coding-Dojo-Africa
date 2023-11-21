from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/<int:x>")
def checkboardX(x):
    return render_template("index.html", x=x)


@app.route("/<int:x>/<int:y>")
def checkboardXY(x, y):
    return render_template("index.html", x=x, y=y)


@app.route("/<int:x>/<int:y>/<string:color1>/<string:color2>")
def checkboardXYColor(x, y, color1, color2):
    return render_template("index.html", x=x, y=y, color1=color1, color2=color2)


if __name__ == "__main__":
    app.run(debug=True)
