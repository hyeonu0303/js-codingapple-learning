var 출석부 = ['흥민','영희','철수','재석'];

const 이름찾기 = 이름 => {
  for(var i = 0; i < 출석부.length; i++){
    if(이름 == 출석부[i]){
      console.log('있어요');
    }
  }
}

이름찾기('철수'); 
이름찾기('명수'); 
console.log('---------------------------------------');




function 이름찾기1(name){
  for (var i = 0; i < 4; i++) {
    if ( name == 출석부[i]) {
      console.log('있어요')
    }
  }
}

이름찾기1('철수');
이름찾기1('명수'); 