const character = "#";
const count = 8;
const rows = [];

// for (iterator; condition; iteration) {

// }

// for (let i=0; "condition"; "iteration") {

// }

// for (let i=0; i<count; "iteration") {

// }
// while(){

// }

for (let i=0; i<count; i=i+1) {
    console.log(i);
    // 将你的日志语句替换为把 i 推送到 rows 数组的语句
    rows.push(i);
}

console.log(rows);

let result='';

// for (const row of rows) {
//     result = result + row;
// }

for (const row of rows) {
    result = result + row + "\n";
}

console.log(result);

const activity = "Code! ";
console.log(activity.repeat(3));

for (let i = 0; i < count; i = i + 1) {
    // rows.push(character);
    // rows.push(character.repeat(i));
    // rows.push(character.repeat(i + 1));
}


function padRow () {
    // return "Hello!";
}

function padRow (name) {
    // return "Hello!";
    // return name;
    return 123;
}

// padRow();
padRow('liu');

// 为什么 用const 不用let去接收函数返回值的结果
const call = padRow();
// console.log(call);
// console.log(padRow());


// // 一个简单的函数
// function sum(a, b) {
//     return a + b;
//   }
  
//   // 使用 const，因为结果不会变化
//   const total = sum(10, 20);
//   console.log(total); // 输出：30


function addTwoNumbers(fristNum, secondNum) {
    let sum; 
    sum = fristNum + secondNum;
    return sum;
}

function addTwoNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  
let sum = addTwoNumbers(5, 10);
console.log(sum);


function padRow(rowNumber, rowCount) {
    // return character.repeat(rowNumber)
    // rows.push(padRow());
    rows.push(padRow(i + 1,count))
}

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
