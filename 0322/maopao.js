let lest=[5,4,3,2,1];
for(let x=0;x<lest.length-1;x++){
    for(let y=0;y<lest.length-x;y++){
    if(lest[y]>lest[y+1]){
        let z=lest[y];
        lest[y]=lest[y+1];
        lest[y+1]=z;
    }
    
    
}console.info(lest);
}