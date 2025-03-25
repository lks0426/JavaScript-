
// 使用let关键字来声明一个名为character的变量
// let character;
// console.log(character);

// 在声明变量的阶段，通过将 "Hello" 赋值给 character 变量来实现变量的初始化。
let character='Hello';
console.log(character);

character='World';
console.log(character);


// 使用驼峰式命名法声明一个新的 secondCharacter 变量
let secondCharacter;
console.log(secondCharacter);

// 将 secondCharacter 赋值从 "Test" 更改为 character 变量
secondCharacter=character;
console.log(secondCharacter);

let count=8;
console.log(count);
console.log(typeof(count));
console.log(typeof(secondCharacter));

count = count + 1;

console.log(typeof(count));

console.log(count);

let rows  = [];
// 和其他的一样，也可以在声明的时候对数组进行初始化
// let rows  =["first", "second"];
console.log(typeof(array));
rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows);
rows[2] = 25; 
console.log(rows[2]);
console.log(rows);

console.log(rows.length);

console.log(rows[rows.length-1]);

// 练习
let cities=["London","New York","Mumbai"];
console.log(cities);
cities[cities.length-1] = "Mexico City";
console.log(cities);

// 数组的push() 方法
rows.push("freeCodeCamp");
console.log(rows);

// 创建一个新变量叫作 popped ，并将 rows.pop() 的结果分配给它。 然后，在控制台记录 popped
let popped = rows.pop();
console.log(popped);
console.log(rows);

// 重新声明一个新的 pushed 变量，并且打印它
let pushed = rows.push();
console.log(pushed);
// console.log(rows);

// 你想到控制台里打印的会是 4 吗？ 
// 在你给数组添加一个值后，.push() 方法返回这个数组的新的长度
rows.push(100);
pushed = rows.push();
console.log(pushed);

// const firstName = "Naomi";
// firstName = "Jessica";

// const firstName;



