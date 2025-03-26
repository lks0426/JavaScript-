// 全局作用域
let a=10;

function 退出关键字和变量的作用域(){

    let b=20;
    console.log('-----------函数作用域输出结果---------------');
    console.log(a);
    console.log(b);
    // console.log(c);

    if(1==1) {
      console.log('-----------块状作用域输出结果---------------');  
      let c =30;
      console.log(a);
      console.log(b);
      console.log(c);
    }

}

console.log('-----------全局作用域输出结果---------------');
console.log(a);
// console.log(b);
// console.log(c);

退出关键字和变量的作用域();





















    // // 函数内作用域
    // let test =10;

    // console.log(test);
    // console.log('函数内a= ' + a);

    // for (let i=0; i<5; i++) {
    //     // 块状作用域 (if{ 代码块} for(){代码块})
    //     if(i==2){
    //         return;
    //     }
    //     console.log('这是第'+ (i + 1) + '次循环  ' +'块状内a= '  + a );
    // }

    // return 0;