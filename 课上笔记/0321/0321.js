let class1Scores =[92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
let class2Scores =[45, 87, 98, 100, 86, 94, 67, 88, 94, 95];

function getAverage(classScores){
    let total=0;
    for(let i=0;i<classScores.length;i++){
        total+= classScores[i];
    }   
     

    return total/classScores.length;
}


function getGrade(score){
   if(score==100){
    return 'A++';
   } else if(score>=90){
    return 'A';
} else if(score>=80){
    return 'B';
} else if(score>=70){
    return 'C';
} else if(score>=60){
    return 'D';
} else{
    return 'E';
}

}

function hasPassingGrade(grade){

    if(grade=='E'){
      return '不合格';
    }

    return '合格';

}


function studentMsg(classAverage,score){
   let grade = getGrade(score);
   let isPassed = hasPassingGrade(grade);

  return '该班级平局分是:' +classAverage+ ' 你的成绩是:' +grade + ' 你'+isPassed+'了' ;
}



// let class1Scores =[92, 88, 12, 77, 57, 100, 67, 38, 97, 89];

let class2Average = getAverage(class2Scores);

for(let i=0;i<class2Scores.length;i++){
    let msg = studentMsg(class2Average,class2Scores[i]);
    console.log('第'+(i+1)+'个同学'+msg);
}

