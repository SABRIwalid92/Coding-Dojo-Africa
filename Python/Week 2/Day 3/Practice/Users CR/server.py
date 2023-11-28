from flask import Flask, render_template, request, redirect

app = Flask(__name__)


# ================ ADD CONTROLLERS ===========================
from users import User


@app.route("/")
def read_all():
    users = User.get_all()
    return render_template("Read(all).html", users=users)


@app.route("/users/new")
def new_user():
    return render_template("Create.html")


@app.route("/users/create", methods=["POST"])
def create():
    User.save(request.form)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
