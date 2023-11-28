from flask import Flask, render_template, request, redirect

from flask_app import app

from flask_app.models.user import User


@app.route("/")
def read_all():
    users = User.get_all()
    return render_template("Read(all).html", users=users)


@app.route("/users/new")
def new_user():
    return render_template("Create.html")


@app.route("/users/create", methods=["POST"])
def create():
    id = User.save(request.form)
    return redirect(f"/users/{id}")


@app.route("/users/<int:id>")
def show_one(id):
    user = User.get_by_id({"id": id})
    return render_template("one_user.html", user=user)


@app.route("/users/<int:id>/edit")
def edit(id):
    user = User.get_by_id({"id": id})
    return render_template("Edit.html", user=user)


@app.route("/users/<int:id>/update", methods=["POST"])
def update(id):
    User.update({**request.form, "id": id})
    return redirect(f"/users/{id}")


@app.route("/users/<int:id>/delete")
def delete(id):
    User.delete({"id": id})
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
