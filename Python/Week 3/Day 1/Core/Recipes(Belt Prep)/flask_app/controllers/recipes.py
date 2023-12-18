from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.recipe import Recipe
from flask_app.models.user_model import User


@app.route("/recipes")
def dashboard():
    return render_template("dashboard.html", recipes=Recipe.get_all())


@app.route("/recipes/new")
def new_recipe():
    if "user_id" in session:
        return render_template("create_recipe.html")
    return redirect("/")


@app.route("/recipes/create", methods=["POST"])
def create():
    data = {**request.form, "user_id": session["user_id"]}
    if Recipe.validate(data):
        Recipe.create(data)
        return redirect("/dashboard")
    return redirect("/recipes/new")


@app.route("/recipes/edit/<int:id>")
def edit(id):
    return render_template("edit_recipe.html", recipe=Recipe.get_by_id({"id": id}))


@app.route("/recipes/update/<int:id>", methods=["POST"])
def update(id):
    data = {**request.form, "id": id}
    Recipe.update(data)
    return redirect("/dashboard")


@app.route("/recipes/delete/<int:id>")
def delete(id):
    data = {"id": id}
    Recipe.delete(data)
    return redirect("/dashboard")


@app.route("/recipes/<int:id>")
def one_recipe(id):
    return render_template(
        "one_recipe.html",
        recipe=Recipe.get_by_id({"id": id}),
        loggedin_user=User.get_user_by_id({"id": session["user_id"]}),
        get_user_by_id=User.get_user_by_id,
    )
