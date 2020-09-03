let count: number = 10;
let single: string = "hello";

const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21,
};

const fruits: string[] = ["Jack", "Banana"];

// 列挙型
enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT,
};

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [10, "string"];

type size = "small" | "te" | "tse";

function add(num1: number, num2: number): number {
  return num1 + num2;
}
