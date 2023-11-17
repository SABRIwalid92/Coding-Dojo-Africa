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


bankAccount = BankAccount(0.02)


# class User:
#     def __init__(self, name, email, bankAccount):
#         self.name = name
#         self.email = email
#         self.account = bankAccount

#     def make_deposit(self, amount):
#         self.account.deposit(amount)

#     def make_withdrawal(self, amount):
#         self.account.withdraw(amount)

#     def display_user_balance(self):
#         self.account.display_account_info()

#     def transfer_money(self, amount, other_user):
#         self.make_withdrawal(amount)
#         other_user.make_deposit(amount)


class User:
    def __init__(self, name, email, bankAccounts=[]):
        self.name = name
        self.email = email
        self.bankAccounts = bankAccounts.copy()

    def add_bankAccount(self, bankAccount, activeAccountIndex):
        self.bankAccounts.append(bankAccount)

    def choose_active_account(self, activeAccountIndex):
        print(f"bank account N°{activeAccountIndex} is active")
        return self.bankAccounts[activeAccountIndex]

    def make_deposit(self, amount, activeAccountIndex):
        self.choose_active_account(activeAccountIndex).deposit(amount)

    def make_withdrawal(self, amount, activeAccountIndex):
        self.choose_active_account(activeAccountIndex).withdraw(amount)

    def display_user_balance(self, activeAccountIndex):
        self.choose_active_account(activeAccountIndex).account.display_account_info()

    def transfer_money(
        self, amount, other_user, activeAccountIndex, activeAccountIndex_other_user
    ):
        self.choose_active_account(activeAccountIndex).make_withdrawal(amount)
        other_user.choose_active_account(activeAccountIndex_other_user).make_deposit(
            amount
        )
