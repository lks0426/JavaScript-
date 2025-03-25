let array1= [5, 2, 4, 3, 1];


for(let i=0;i<array1.length-1;i++){
  
   for(let j=0;j<array1.length-i;j++){

       if(array1[j]>array1[j+1]){

           let temp = array1[j+1];

           array1[j+1] = array1[j];

           array1[j] = temp;

       }

       console.log(array1);

   }
   console.log(array1);

}

console.log(array1);