console.log(Math.PI);
console.log(Math.max(1, 2, 3, 8));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce(
      (max, item) => (max >= item ? max : item),
      numbers[0]
    );
  }
}

console.log(MyMath.PI);
const numbers = [1, 2, 3, 4, 5, 44];
console.log(MyMath.max(122, 2, 1, 12, 9));
console.log(MyMath.max(...numbers));
const negativeNumbers = [-9, -8, -1];
console.log(MyMath.max(...negativeNumbers));
