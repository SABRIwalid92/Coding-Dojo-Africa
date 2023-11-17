# For this assignment you will create the user class and add a couple methods!

# Attributes:
# On instantiation of a user, the following attributes should be passed in as arguments:

# first_name
# last_name
# email
# age
# Also include default attributes:

# is_rewards_member - default value of False
# gold_card_points = 0
# Methods:
# display_info(self) - Have this method print all of the users' details on separate lines.
# enroll(self) - Have this method change the user's member status to True and set their gold card points to 200.
# spend_points(self, amount) - have this method decrease the user's points by the amount specified.

# Ninja Bonuses:


# Add logic in the enroll method to check if they are a member already, and if they are, print "User already a
# member." and return False, otherwise return True.
# Add logic in the spend points method to be sure they have enough points to spend that amount and handle appropriately.
class user:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
    def display_info(self)
        for i in self:
            print(self[i])
    
    def enroll(self)
        if(self.is_rewards_member):
            print("User already a member.")
            return False
        else:
            self.is_rewards_member = True
            return True
    def spend_points(self, amount):
        if(self.gold_card_points - amount >= 0):
            self.gold_card_points -= amount
        else:
            print("Gold card points credit insufficient!")
