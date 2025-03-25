// for(let x=1; x<=3;x++){
//   console.log('x=' + x);
// }

// for(let y=1; y<=3;y++){
//   console.log('y=' + y);
// }

// x=1 y=1
// x=1 y=2
// x=1 y=3
// x=2 y=1
// x=2 y=2
// x=2 y=3
// x=3 y=1
// x=3 y=2
// x=3 y=3

// for(let x=1; x<=3;x++){
    
//     console.log('x=' + x);

//     for(let y=1; y<=3;y++){
//         console.log('y=' + y);
//     }
// }
  

// for(let x=1; x<=3;x++){
//     for(let y=1; y<=3;y++){
//         // console.log('x=' + x);
//         console.log('x=' + x +' '+ 'y=' + y);
//     }
// }

// for(let x=1; x<=9;x++){
//     for(let y=1; y<=9;y++){
//         console.log( x + '*' + y+'='+ (x * y));
//     }
// }


// for(let x=1; x<=9;x++){

//     let rowChar='';
//     for(let y=1; y<=x;y++){
//         rowChar +=  x + '*' + y+'='+ (x * y);
//         rowChar += ' ';
//         // console.log( x + '*' + y+'='+ (x * y));
//     }
//     console.log(rowChar);
// }

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // 交换位置
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  const nums = [5, 2, 9, 1, 3];
  console.log(bubbleSort(nums)); // 输出：[1, 2, 3, 5, 9]



function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i; // 假设当前位置是最小值

      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j; // 找到更小的值
        }
      }

      if (minIndex !== i) {
        // 交换位置
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    return arr;
}
  
console.log(selectionSort([5, 3, 6, 2, 4])); // 输出：[2, 3, 4, 5, 6]


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];       // 当前要插入的元素
      let j = i - 1;
  
      // 从当前元素往前比较，只要比 current 大就往后移
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];      // 往后移
        j--;
      }
  
      // 插入到正确的位置
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  console.log(insertionSort([5, 2, 4, 6, 1, 3]));



  function bubbleSort(arr) {
    let count = 0;
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        count++;
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return { sorted: arr, count };
  }

  function selectionSort(arr) {
    let count = 0;
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        count++;
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return { sorted: arr, count };
  }
  
  function insertionSort(arr) {
    let count = 0;
    let len = arr.length;
    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0) {
        count++;
        if (arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
        } else {
          break;
        }
      }
      arr[j + 1] = current;
    }
    return { sorted: arr, count };
  }
  


// 已经排好序的数组（最好情况）
// 完全相反顺序的数组（最坏情况）
// 随机顺序数组（一般情况）
const best = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const worst = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const random = [5, 2, 9, 1, 6, 3, 8, 4, 7];


console.log("==== 已排好序 ====");
console.log("冒泡：", bubbleSort([...best]).count);
console.log("选择：", selectionSort([...best]).count);
console.log("插入：", insertionSort([...best]).count);

console.log("==== 反向排序 ====");
console.log("冒泡：", bubbleSort([...worst]).count);
console.log("选择：", selectionSort([...worst]).count);
console.log("插入：", insertionSort([...worst]).count);

console.log("==== 随机顺序 ====");
console.log("冒泡：", bubbleSort([...random]).count);
console.log("选择：", selectionSort([...random]).count);
console.log("插入：", insertionSort([...random]).count);