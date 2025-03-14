let rows=[];
const count=5;
for(let i=0;i<=count;i++){
    rows.push(i);  
}
console.log(rows);

function addNumber(number){
    for(let i=1;i<=number;i++){
       rows.unshift(-i);   
   }
   return console.log("\n"+rows);
}
addNumber(count);
