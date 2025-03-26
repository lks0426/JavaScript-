
// 数据类型 
// 数字 未定义 字符串 对象类型 之一 数组 布尔类型(也可以是一个表达式)

// 三个运算符号
// = 赋值运算符
// == 比较两个值，是否相等，数据类型可以不等
// === 比较两个值，必须全等，方方面面都要一致
function 数据类型() {

    console.log('--------------数字------------');
    console.log(typeof (111));
    console.log(111);

    console.log('-------------未定义-------------');
    let aaa;
    aaa = '1';

    console.log(typeof (aaa));
    console.log(aaa);

    console.log('--------------字符串------------');
    console.log(typeof ('111b'));
    console.log('111b');

    console.log('--------------对象类型 之一 数组------------');
    console.log(typeof ([1, 2]));
    console.log([1, 2]);

    console.log('------------布尔类型--------------');
    console.log(typeof (true));
    console.log(true);

    console.log('-----------表达式，返回结果布尔类型---------------');
    console.log(typeof (1 === '1'));
    console.log(1 === '1');
}

function 变量命名规则和变量间的赋值() {
    // js中，是区分大小写的
    // 驼峰式命名 长蛇命名
    let className;
    let class_name;

    let bbb = '1';
    console.log(bbb);

    let ccc = 'b';
    console.log(ccc);

    bbb = '2';
    console.log(bbb);
    console.log(ccc);

    ccc = bbb;
    console.log(bbb);
    console.log(ccc);
}


function 运算符与拼接() {
    // 运算
    // 两个数字进行运算，输出的结果 是数学上的运算
    console.log('-----------sum---------------');
    let sum = 5 + 3;
    console.log(sum);

    // 一个字符串和一个数字 进行运算，输出的结果 是字符串的拼接
    console.log('-----------sumcChar---------------');
    let num1 = 5;
    console.log(typeof (num1));
    let char1 = '3';
    console.log(typeof (char1));
    let sumcChar = num1 + char1;

    console.log(typeof (sumcChar));

    console.log(sumcChar);
}


function 数组内数组_访问的思考流程() {

    let array = [1, true, '3', [44, 55]];
    console.log(array);
    console.log(typeof (array));

    console.log(array[0]);


    // 数组内数组 访问的思考流程
    let array2 = array[3];
    console.log(array2);

    let test = [44, 55];

    console.log('-----------array2 == test---------------');
    console.log(array2 == test);

    console.log(test[0]);

    let array3 = array2[0];

    console.log(array3);

    console.log(array[3][0]);

    // array[3][0] == array2[0] ==  test[0];

    // array2 = array[3];

    // 44 = array[3][0];
}

function 引用数据类型的内存分配() {
    // 基本数据类型 (栈)，引用数据类型 (堆)
    let arraytest1 = [222, 333];
    let arraytest2 = [222, 333];
    console.log(arraytest1 == arraytest2);

}

function 数组的常用方法(citiesUS,citiesCN,co) {

    // let const
    let num2 = 1;
    num2 = 4;
    // console.log('-----------数组可变性---------------');
    // 声明的是常量，并且不可以被改变，因为其不可以被改变，所以，必须对它进行初期化赋值
    const num3Array = [9, 8, 7];
    // num3 = 9;
    num3Array[1] = 4;

    // console.log(num3Array);

    let array9 = [222, 333];
    // console.log(array9);

    array9[0] = "yellow";

    // 数组长度属性 .length
    console.log('-----------数组长度属性---------------');
    console.log(array9.length);

    console.log('-----------通过数组长度属性，访问数组中的倒数第二个元素---------------');
    // console.log(array9);

    const numArray = [9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 400000, 7];
    console.log(numArray.length);

    console.log(numArray[94]);
    console.log(numArray[numArray.length - 2]);

    console.log('-----------数组方法 .push()---------------');
    const num4Array = [9, 8, 7, 6];
    console.log('-----------数组push()方法调用前长度---------------');
    console.log(num4Array.length);
    num4Array.push(0);
    console.log('-----------数组push()方法调用后长度---------------');
    console.log(num4Array.length);
    console.log(num4Array);

    console.log('-----------数组方法 .pop()---------------');

    citiesUS.push(citiesCN.pop());


    if(co=='UK'){
        console.log('-----------英国城市有---------------');
    }else{
        console.log('-----------美国城市有---------------');
    }



    console.log(citiesUS);
    console.log('-----------中国城市有---------------');
    console.log(citiesCN);

}



function for循环() {

    let jishuArray = [];

    let oushuArray = [];

    console.log(jishuArray);
    console.log(oushuArray);

    let xunhuancishuoushu = 1;
    for (let i = 0; i < 10; i = i + 2) {

        oushuArray.push(i);
        console.log('第' + xunhuancishuoushu + '次循环的值是' + i);
        xunhuancishuoushu++;
    }
    // console.log(oushuArray);


    let xunhuancishujishu = 1;
    for (let i = 1; i < 10; i = i + 2) {

        jishuArray.push(i);
        console.log('第' + xunhuancishujishu + '次循环的值是' + i);
        xunhuancishujishu++;
    }
    // console.log(jishuArray);

    console.log(oushuArray);



    // 思考一下下面两段代码的输出结果

    console.log('-----------不完全遍历---------------');
    for (let i=0; i<3; i++) {
        console.log(jishuArray[i]);
    }


    console.log('-----------正常遍历基数数组---------------');
    for (let i=0; i<jishuArray.length; i++) {
        console.log(jishuArray[i]);
    }

    // for .. of 遍历数组
    console.log('-----------for .. of 遍历基数数组---------------');
    for (const jishu of jishuArray) {
        console.log(jishu);
    }


    // for (let i=0; i<oushuArray.length; i++) {
    //     console.log(oushuArray[i]);
    // }

    // 思考 如何(遍历输出两个数组)全部输出出来


    const fruits = ["香蕉", "苹果", "橘子"];


    for  (const fruit of fruits) {
        
        // item = item+'123';

        let buyFruit = "我买了：" + fruit;
        // fruit = "我买了：" + fruit;

        console.log(fruit);
        console.log(buyFruit);

        // console.log("我买了：" + fruit);

    }

}

 // for循环();

 // 形式参数(num1,num2)
 // 函数体，函数的写法
 function sum(num1,num2){
    console.log(num1+num2);
 }

// 函数的调用 
// 实际参数(1,2)(2,4)
// sum(1,2);
// sum(2,4);
// sum(5,6);

// 有返回值的函数
 function sumRet(num1,num2){
    return num1+num2;
 }

// 函数的调用 
// 有返回值的函数在调用时，可以用一个变量接受
// 如果没有返回值，强行用一个变量去接收的话，会是undefined
// let sum = sum(1,2);
// console.log(sum);

let co1 = 'US';
let co2 = 'UK'; 

let citiesUS = ["洛杉矶"];
let citiesCN = ["北京", "上海", "纽约"];

let citiesUK = ["伦敦"];
let citiesCN2 = ["北京", "上海", "伦敦2"];


console.log('---------------------------------------------------------第一次调用函数---------------');
数组的常用方法(citiesUS,citiesCN,co1);
console.log('---------------------------------------------------------第二次调用函数---------------');
数组的常用方法(citiesUK,citiesCN2,co2);
// console.log('---------------------------------------------------------第三次调用函数---------------');
// 数组的常用方法();
// console.log('---------------------------------------------------------第四次调用函数---------------');
// 数组的常用方法();



