class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

    def walk(self):
        self.pet.play()

    def feed(self):
        self.pet.eat()

    def bathe(self):
        self.pet.noise()


class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100

    def sleep(self):
        self.health += 25

    def eat(self):
        self.energy += 5
        self.health += 10

    def play(self):
        self.health += 5

    def noise(self):
        print("leMEEEaww!")


gamabunta = Pet("gamabunta", "toad", "Rasengan")
jiraya = Ninja("jiraya", "uzumaki", "sake", "sake", gamabunta)

jiraya.feed()
jiraya.walk()
jiraya.bathe()


class FightPet(Pet):
    def __init__(self, name, type, tricks, damage):
        super().__init__(name, type, tricks)
        self.damage = damage

    def attack(self, pet):
        pet.health -= self.damage


class StrategyPet(Pet):
    def __init__(self, name, type, tricks, plan):
        super().__init__(name, type, tricks)
        self.plan = plan

    def onlySkill(self, pet):
        print(f"i have a plan!\n{self.plan}")


class TransportPet(Pet):
    def __init__(self, name, type, tricks, load=[]):
        super().__init__(name, type, tricks)
        self.load = load.copy()

    def add_load(self, new_load):
        self.load.append(new_load)
