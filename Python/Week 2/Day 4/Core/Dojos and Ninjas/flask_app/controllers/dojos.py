from flask_app import app
from flask import redirect, render_template, request
from flask_app.models.dojo import Dojo

from flask_app.models.ninja import Ninja


@app.route("/")
def index():
    return redirect("/dojos")


@app.route("/dojos")
def dojos():
    return render_template("dojos.html", dojos=Dojo.get_all())


@app.route("/dojos/create", methods=["POST"])
def create_dojo():
    Dojo.save(request.form)
    return redirect("/dojos")


@app.route("/dojos/<int:id>")
def one_dojo(id):
    return render_template(
        "one_dojo.html",
        ninjas=Ninja.get_ninjas_by_dojo({"id": id}),
        dojo=Dojo.get_by_id({"id": id}),
    )
