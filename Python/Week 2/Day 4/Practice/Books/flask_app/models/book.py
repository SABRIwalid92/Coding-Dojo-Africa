from flask_app.config.mysqlconnection import connectToMySQL


class Book:
    DB = "books_schema"

    def __init__(self, data):
        self.id = data["id"]
        self.title = data["title"]
        self.num_of_pages = data["num_of_pages"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def get_all(cls, condition=";"):
        query = (
            """
                SELECT * FROM books
                """
            + condition
        )
        result = connectToMySQL(cls.DB).query_db(query)
        books = []
        for row in result:
            books.append(cls(row))
        return books

    @classmethod
    def get_by_id(cls, data):
        query = """
                SELECT * FROM books
                where id = %(id)s;
                """
        result = connectToMySQL(cls.DB).query_db(query, data)
        return result[0]

    @classmethod
    def save(cls, data):
        query = """
                INSERT INTO books (title, num_of_pages)
                VALUES (%(title)s, %(num_of_pages)s)
                """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def get_books_by_author(cls, data):
        query = """
                SELECT * FROM books 
                JOIN favorites ON book_id = books.id
                JOIN authors ON authors.id = author_id
                WHERE authors.id = %(id)s;
                """
        result = connectToMySQL(cls.DB).query_db(query, data)
        books = []
        for row in result:
            books.append(cls(row))
        return books

    @classmethod
    def insert(cls, data):
        query = """
                INSERT INTO favorites (book_id, author_id)
                VALUES (%(book_id)s, %(author_id)s)
                """
        return connectToMySQL(cls.DB).query_db(query, data)
