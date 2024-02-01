public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount(111011101110L);
        BankAccount account2 = new BankAccount(222022202220L);
        BankAccount account3 = new BankAccount(333033303330L);

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney

        account1.getBalance();
        account1.deposit(1000);
        account1.deposit(1000);
        account1.getBalance();

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account1.getBalance();
        account1.withdraw(400);
        account1.getBalance();

        // Static Test (print the number of bank accounts and the totalMoney)

    }
}
