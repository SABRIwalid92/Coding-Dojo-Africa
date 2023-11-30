from flask_app import app
from flask import redirect, render_template, request
from flask_app.models.book import Book
from flask_app.models.author import Author


@app.route("/books")
def books():
    return render_template("books.html", books=Book.get_all())


@app.route("/books/create", methods=["POST"])
def create_book():
    print("===================================", request.form)
    Book.save(request.form)
    return redirect("/books")


@app.route("/books/<int:id>")
def one_book(id):
    authors = Author.get_all(
        "where id not in (select author_id from books_schema.favorites);"
    )
    return render_template(
        "one_book.html",
        book=Book.get_by_id({"id": id}),
        authors=authors,
        book_f_authors=Author.get_authors_by_book({"id": id}),
    )


@app.route("/books/<int:id>/favorite", methods=["POST"])
def book_favorites(id):
    Book.insert({**request.form, "book_id": id})

    return redirect(f"/books/{id}")
