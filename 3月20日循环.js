let asdasd = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log("for循环break推出方式");
for (let i = 0; i < asdasd.length; i++) {
    if (i === 4) {
        console.log("第五次,break");
        break;
    }
    console.log("当前为：", asdasd[i]);
}

console.log("for循环continue方式");
for (let i = 0; i < asdasd.length; i++) {
    if (i === 4) {
        console.log("第五次, continue");
        continue;
    }
    console.log("当前为：", asdasd[i]);
}

function xunhuan(asdasd) {
    for (let i = 0; i < asdasd.length; i++) {
        if (i === 4) {
            console.log("第五次, return");
            return;
        }
        console.log("当前为：", asdasd[i]);
    }
}
xunhuan(asdasd);

console.log("while10ci");
let count = 0;
while (count < 10) {
    console.log("第", count + 1, "此循环");
    count++;
}

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