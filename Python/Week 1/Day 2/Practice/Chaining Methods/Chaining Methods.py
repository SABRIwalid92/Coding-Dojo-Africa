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
            return self
    
    def enroll(self)
        if(self.is_rewards_member):
            print("User already a member.")
            return False
        else:
            self.is_rewards_member = True
            return true
    def spend_points(self, amount):
        if(self.gold_card_points - amount >= 0):
            self.gold_card_points -= amount
        else:
            print("Gold card points credit insufficient!")
            return self
