from flask_app.config.mysqlconnection import connectToMySQL


class Ninja:
    DB = "dojos_and_ninjas_schema"

    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.age = data["age"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.dojo_id = data["dojo_id"]

    @classmethod
    def get_all(cls):
        query = """
                SELECT * FROM ninjas;
                """
        result = connectToMySQL(cls.DB).query_db(query)
        ninjas = []
        for row in result:
            ninjas.append(cls(row))
        return ninjas

    @classmethod
    def save(cls, data):
        query = """
                INSERT INTO ninjas (first_name, last_name, age, dojo_id)
                VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s)
                """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def get_ninjas_by_dojo(cls, data):
        query = """
                SELECT * FROM ninjas 
                JOIN dojos ON dojos.id = dojo_id
                WHERE dojo_id = %(id)s;
                """
        result = connectToMySQL(cls.DB).query_db(query, data)
        ninjas = []
        for row in result:
            ninjas.append(cls(row))
        return ninjas
