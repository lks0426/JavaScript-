let asd = [];

for (let i = 1; i <= 10; i++) {
    asd.push(i);
}

console.log("数组内容：");
for (let i = 0; i < asd.length; i++) {
    console.log(asd[i]);
}

function sumArray(asd) {
    let sum = 0;
    for (let i = 0; i < asd.length; i++) {
        sum += asd[i];
    }
    return sum;
}

let result = sumArray(asd);
console.log("数组元素的总和是：", result);