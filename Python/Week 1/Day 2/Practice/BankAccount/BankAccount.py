class BankAccount:
    # don't forget to add some default values for these parameters!
    all_accounts = []

    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance - amount >= 0:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.int_rate * self.balance
        return self

    @classmethod
    def print_all_accounts_infos(cls):
        for i in cls.all_accounts:
            i.display_account_info()


BankAccount1 = BankAccount(0.02)
BankAccount2 = BankAccount(0.12, 1000)

BankAccount1.deposit(1000).deposit(1000).deposit(1000).withdraw(
    1
).yield_interest().display_account_info()

BankAccount2.deposit(10).deposit(66).withdraw(55).withdraw(1111).withdraw(12).withdraw(
    3
).yield_interest().display_account_info()

BankAccount.print_all_accounts_infos()
