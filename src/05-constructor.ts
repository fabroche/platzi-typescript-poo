export class MyDate {
  constructor(
    private year: number = 1993,
    private month: number = 7,
    private day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years'): void {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  private addPadding(value: number) {
    if (value < 10 && value > 0) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public getDate() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
myDate.add(3, 'days');
console.log(myDate.printFormat());
myDate.add(1, 'months');
console.log(myDate.printFormat());
myDate.add(1, 'years');
console.log(myDate.printFormat());

console.log(myDate.getDate());
