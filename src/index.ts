class Account {
  readonly id: number;
  name: string;
  nickName?: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("invalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("invalid value");

    this._balance = value;
  }

  private calculateTax() {}
}

let account = new Account(1, "mohammad", 0);

console.log(account.balance);
account.balance = 1;

//////////////////////////
//// access modifire ////
//public / private / protected
