from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DB
from flask import flash
import re


class Recipe:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.description = data["description"]
        self.instructions = data["instructions"]
        self.date = data["date"]
        self.under = data["under"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO recipes (name, description, instructions, date, under,user_id)
                VALUES (%(name)s,%(description)s,%(instructions)s,%(date)s, %(under)s, %(user_id)s);
                """

        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def update(cls, data):
        query = """
                UPDATE recipes SET name = %(name)s, description=%(description)s, instructions=%(instructions)s, date=%(date)s, under=%(under)s
                WHERE id = %(id)s;
                """

        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = """
                
                DELETE FROM recipes
                WHERE id = %(id)s;
                """

        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def get_by_id(cls, data):
        query = """
                     SELECT * FROM recipes
                    WHERE recipes.id = %(id)s;
                """
        result = connectToMySQL(DB).query_db(query, data)
        if len(result) < 1:
            return False

        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = """
                     SELECT * FROM recipes;
                """
        results = connectToMySQL(DB).query_db(query)
        recipes = []
        for recipe in results:
            recipes.append(cls(recipe))

        return recipes

    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["name"]) < 3:
            is_valid = False
            flash("name Required !", "cr")
        if len(data["description"]) < 3:
            is_valid = False
            flash("Description Required !", "cr")
        if len(data["instructions"]) < 3:
            is_valid = False
            flash("Instructions Required !", "cr")
        return is_valid
