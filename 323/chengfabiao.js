for (let x = 1; x <= 9; x++) {
    let hang = "";
    for (let y = 1; y <= x; y++) {
    
    hang += `${y} * ${x} = ${x * y}\t`;
    }
    console.log(hang);
  }