const character = "#";
const count = 8;
const rows = [];

// for (iterator; condition; iteration) {

// }

// for (let i=0; "condition"; "iteration") {

// }

// for (let i=0; i<count; "iteration") {

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
    rows.push(character.repeat(i));
}
