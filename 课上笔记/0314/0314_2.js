
let jishuArray=[];

let oushuArray=[];

console.log(jishuArray);
console.log(oushuArray);

for (let i=0; i<10; i=i+2) {
    oushuArray.push(i);
}
console.log(oushuArray);

for (let i=1; i<10; i=i+2) {
    jishuArray.push(i);
}
console.log(jishuArray);

console.log('------------------------------');

for(let i=0; i<jishuArray.length; i=i+1) {
    console.log(jishuArray[i]);
}

// for(let i=0; i<oushuArray.length; i=i+1) {
//     console.log(oushuArray[i]);
// }
console.log('------------------------------');

 for (const jishu of jishuArray) {
    console.log(jishu);
 }

 console.log('------------------------------');


 let result='aaa';
 console.log(result 
    +'bbb');

console.log('------------------------------');

let a='code! ';

console.log(a.repeat(3));

console.log('------------------------------');

// 一个简单的函数
function sum(a, b) {
    // return a + b;
    console.log('aaaaaa');
}
  
// 使用 const，因为结果不会变化
const total = sum(10, 20);

console.log(total); // 输出：30