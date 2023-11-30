from flask_app import app
from flask import redirect, render_template, request

from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo


@app.route("/ninjas")
def ninjas():
    return render_template("ninjas.html", ninjas=Ninja.get_all(), dojos=Dojo.get_all())


@app.route("/ninjas/create", methods=["POST"])
def create_ninja():
    print("===================================", request.form)
    Ninja.save(request.form)
    return redirect("/ninjas")
