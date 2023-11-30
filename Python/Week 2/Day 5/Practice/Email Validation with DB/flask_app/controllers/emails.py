from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.email import Email


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/success")
def success():
    return render_template("success.html", emails=Email.get_all())


@app.route("/create", methods=["POST"])
def create():
    if not Email.validate(request.form):
        return redirect("/")
    Email.create(request.form)
    return redirect("/success")
