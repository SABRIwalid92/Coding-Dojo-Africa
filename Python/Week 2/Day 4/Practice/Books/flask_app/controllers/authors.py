from flask_app import app
from flask import redirect, render_template, request
from flask_app.models.author import Author
from flask_app.models.book import Book


@app.route("/")
def index():
    return redirect("/authors")


@app.route("/authors")
def authors():
    return render_template("authors.html", authors=Author.get_all())


@app.route("/authors/create", methods=["POST"])
def create_author():
    Author.save(request.form)
    return redirect("/authors")


@app.route("/authors/<int:id>")
def one_author(id):
    books = Book.get_all(
        "where id not in (select book_id from books_schema.favorites);"
    )
    return render_template(
        "one_author.html",
        author=Author.get_by_id({"id": id}),
        books=books,
        author_f_books=Book.get_books_by_author({"id": id}),
    )


@app.route("/authors/<int:id>/favorite", methods=["POST"])
def author_favorites(id):
    Book.insert({**request.form, "author_id": id})

    return redirect(f"/authors/{id}")
