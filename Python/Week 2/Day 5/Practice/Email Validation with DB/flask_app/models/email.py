from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DB
from flask import flash
import re

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")


class Email:
    def __init__(self, data):
        self.id = data["id"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def create(cls, data):
        query = """
                  INSERT INTO emails (email)
                  VALUES (%(email)s);
                """
        flash(
            "The email address you entered (data['email']) is a VALID email address! Thank you! ",
            "OK",
        )
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = """
                     SELECT * FROM emails;
                """
        results = connectToMySQL(DB).query_db(query)
        if len(results) < 1:
            return False
        emails = []
        for result in results:
            emails.append(cls(result))
        return emails

    @classmethod
    def get_by_email(cls, data):
        query = """
                    SELECT * FROM emails
                    WHERE emails.email = %(email)s;
                """

        result = connectToMySQL(DB).query_db(query, data)
        if len(result) < 1:
            return False

        return cls(result[0])

    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["email"]) < 1:
            flash("email Required !")
            is_valid = False
        elif not EMAIL_REGEX.match(data["email"]):
            flash("Invalid email address", "reg")
            is_valid = False
        else:
            data_for_email = {"email": data["email"]}
            potential_user = Email.get_by_email(data_for_email)
            if potential_user:
                is_valid = False
                flash("email already taken, hopefully by you! ", "error")
        return is_valid
