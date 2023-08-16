class Account {
  readonly id: number;
  name: string;
  nickName?: string;
  balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id
    this.name = name
    this.balance = balance
  }

  deposit(amount:number):void {
    if(amount <= 0)
      throw new Error('invalid amount')
    this.balance += amount
  }
 }

 let account = new Account(1, 'mohammad', 0)

 account.deposit(400)

 /////////////////////////

