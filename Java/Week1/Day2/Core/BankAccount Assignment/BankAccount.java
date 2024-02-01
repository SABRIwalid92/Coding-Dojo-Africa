public class BankAccount {
    // MEMBER VARIABLES
    private Long accountNumber;
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    public BankAccount() {
        accounts++;
    }
    public BankAccount(Long accountNumber) {
        this.accountNumber = accountNumber;
        accounts++;
    }
    // Be sure to increment the number of accounts

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public Long getAccountNumber() {
        return accountNumber;
    }

    public double getCheckingBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public static int accountsCount() {
        return accounts;
    }

    public static double totalMoneyCount() {
        return totalMoney;
    }

    // setter

    public void setAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }

    public static void setaccountsCount(int accounts) {
        BankAccount.accounts = accounts;
    }

    public static void settotalMoneyCount(double totalMoney) {
        BankAccount.totalMoney = totalMoney;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings
    public void deposit(double amount) {
        System.out.println("choose where to deposit:\n1. Checking\n2. Savings\n");
        String choice = System.console().readLine();
        switch (choice) {
            case "1":
                setCheckingBalance(this.getCheckingBalance() + amount);
                settotalMoneyCount(BankAccount.totalMoneyCount() + amount);
                break;
            case "2":
                setSavingsBalance(this.getSavingsBalance() + amount);
                settotalMoneyCount(BankAccount.totalMoneyCount() + amount);
                break;

            default:
                System.out.println("Invalid choice");
                break;
        }
    }

    // account
    public void displayAccount() {
        System.out.println(this.getAccountNumber());
    }

    // withdraw
    // - users should be able to withdraw money from their checking or savings
    public void withdraw(double amount) {
        System.out.println("choose where to withdraw from:\n1. Checking\n2. Savings\n");
        String choice = System.console().readLine();
        switch (choice) {
            case "1":
                if (this.getCheckingBalance() - amount > 0) {
                    setCheckingBalance(this.getCheckingBalance() - amount);
                    settotalMoneyCount(BankAccount.totalMoneyCount() - amount);
                }

                else
                    System.out.println("Checking Balance insufficient");

                break;
            case "2":
                if (this.getSavingsBalance() - amount > 0) {
                    setSavingsBalance(this.getSavingsBalance() - amount);
                    settotalMoneyCount(BankAccount.totalMoneyCount() - amount);
                } else
                    System.out.println("Savings Balance insufficient");
                break;

            default:
                System.out.println("Invalid choice");
                break;
        }
    }
    // account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account
    public void getBalance(){
        System.out.println(this.getCheckingBalance() + this.getSavingsBalance());
    }
}
