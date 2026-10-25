class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }

        this.balance -= amount;
    }
}

class Bank {
    constructor() {
        this.BankAccount = [];
    }
    addAccount(account) {
        this.BankAccount.push(account)
    }
    transfer(fromName, toName, amount) {
        const accountA = this.BankAccount.find(item => item.owner === fromName)
        const accountB = this.BankAccount.find(item => item.owner === toName)
        if (accountA && accountB) {
            accountA.withdraw(amount)
            accountB.deposit(amount)
        }
        else {
            throw new Error("Invalid account names");
        }
    }
    showBalances() { 
        this.BankAccount.forEach(account => console.log(`Owner: ${account.owner}, Balance: ${account.balance}`))
    }


}
const bank = new Bank();

bank.addAccount(new BankAccount("Alice", 2000));
bank.addAccount(new BankAccount("Bob", 500));

// הצגת היתרות לפני ההעברה
console.log("Before transfer:");
bank.showBalances();

// העברת 1000 מ-Alice ל-Bob
bank.transfer("Alice", "Bob", 1000);

// הצגת היתרות אחרי ההעברה
console.log("After transfer:");
bank.showBalances();