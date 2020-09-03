"use strict";
let count = 10;
let single = "hello";
const person = {
    name: "Jack",
    age: 21,
};
const fruits = ["Jack", "Banana"];
// 列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
let unionType = 10;
let unionTypes = [10, "string"];
function add(num1, num2) {
    return num1 + num2;
}
