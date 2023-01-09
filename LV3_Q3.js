const 함수 = (성적,점수) => {
  let a = 0;
  //성적을 array자료에 전부담기
  let array = [];
  array = 성적;
  
    //자료에담긴 성적 평균구하기
    //for Each는 array안의 갯수만큼 반복해줄수있음
    //* 5번반복하게됨 그리고 항상 콜백함수를 넣어야함 
    //* element는 array에있는 데이터를 가져옴
  array.forEach(element => {
    a += element;
  });
  a /= array.length;
  console.log(a);
  //성적평균이 점수보다 높으면 "평균보다 점수가올랐네요"
  if(a > 점수){
    console.log(`평균보다 ${a-점수}점이 올랐네요`);        
  }
  else if(a < 점수){
    console.log(`평균보다 ${a-점수}점이 떨어졌네요 재수추천`) 
  } 
} 
//      성적               점수 
함수([10, 20, 30, 40, 50], 40);
console.log('--------------------');
함수([40, 40, 40], 20);

//let a = 0이 함수밖에 있어서 안됐음
