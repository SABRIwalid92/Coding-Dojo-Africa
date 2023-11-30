from flask_app.config.mysqlconnection import connectToMySQL


class Dojo:
    DB = "dojos_and_ninjas_schema"

    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def get_all(cls):
        query = """
                SELECT * FROM dojos;
                """
        result = connectToMySQL(cls.DB).query_db(query)
        dojos = []
        for row in result:
            dojos.append(cls(row))
        return dojos

    @classmethod
    def get_by_id(cls, data):
        query = """
                SELECT * FROM dojos
                where id = %(id)s;
                """
        result = connectToMySQL(cls.DB).query_db(query, data)
        return result[0]

    @classmethod
    def save(cls, data):
        query = """
                INSERT INTO dojos (name)
                VALUES (%(name)s)
                """
        return connectToMySQL(cls.DB).query_db(query, data)
