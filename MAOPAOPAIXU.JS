let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 for (let i = 0; i < 9; i++ ){
 for (let j = 0; j < 9-i; j++){
 if (arr[j] > arr[j + 1]){
    let temp = arr[j];
    arr [j] = arr[j + 1];
    arr [j + 1 ] = temp
    }
  }
}
console.log(arr)