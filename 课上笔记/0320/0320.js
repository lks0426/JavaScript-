let a=100;

function addTwoNum(){
    // let result = num1 + num2;
    let test =10;

    console.log(test);
    console.log('函数内a= ' + a);

    for (let i=0; i<5; i++) {
        if(i==2){
            return;
        }
        console.log('这是第'+ (i + 1) + '次循环  ' +'块状内a= '  + a );
    }

    return 0;
}

let result = addTwoNum();

console.log(result);



// let test =20;

// console.log(test);
// console.log('全局a= ' + a);

