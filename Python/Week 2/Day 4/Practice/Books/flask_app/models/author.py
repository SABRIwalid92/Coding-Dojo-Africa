from flask_app.config.mysqlconnection import connectToMySQL


class Author:
    DB = "books_schema"

    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def get_all(cls, condition=";"):
        query = (
            """
                SELECT * FROM authors
            """
            + condition
        )
        result = connectToMySQL(cls.DB).query_db(query)
        authors = []
        for row in result:
            authors.append(cls(row))
        return authors

    @classmethod
    def get_by_id(cls, data):
        query = """
                SELECT * FROM authors
                where id = %(id)s ;
                """
        result = connectToMySQL(cls.DB).query_db(query, data)
        return result[0]

    @classmethod
    def save(cls, data):
        query = """
                INSERT INTO authors (name)
                VALUES (%(name)s)
                """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def get_authors_by_book(cls, data):
        query = """
                SELECT * FROM authors 
                JOIN favorites ON author_id = authors.id
                JOIN books ON books.id = book_id
                WHERE books.id = %(id)s; 
                """
        results = connectToMySQL(cls.DB).query_db(query, data)
        authors = []
        for row in results:
            authors.append(cls(row))
        return authors
