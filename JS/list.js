//! array에서 사용하는 sort filter map
var array = [7,3,5,2,40];
var array2 = ['a','b','c'];
array.sort(function(a,b){
  return a-b;
});
console.log(array);

array2.sort(function(a,b){
  return a > b;
});
//40000원 미만상품만 보여주세요 이런거 찾을수있음
var newArray = array.filter(function(a){
  return a < 4;
})
console.log(newArray);

//자료 전부 변형
//달러 환율을 변환하거나 그럴때 사용함 
var newArray = array.map(function(a){
  return a * 4;
})
console.log(newArray);
console.log(array2); 

/*---------------local storage-------------*/ 
//!데이터 반영구적으로 저장하는방법
//!localStorage에 상품명 저장
// *localStorage.setItem('이름','값')
localStorage.setItem('이름','kim')
//!추출
localStorage.getItem('이름');
//!삭제
// localStorage.removeItem('이름');
//!object array저장 (편법)
var arr = [1,2,3];
//JSON으로 바꿈
var newArr = JSON.stringify(arr);
localStorage.setItem('num', newArr);
//!JSON으로 저장한거 추출하기 
/* var 꺼낸거 = localStorage.getItem('num');
console.log(JSON.parse(꺼낸거)[0]); */
//! 수정해주세요 문법은 없음 
/*
1. 자료꺼냄
2.꺼낸거 수정함
3.다시넣음 이런식으로 수정가능
*/

//---------------------------
var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];


//* 첫템플릿 
  products.forEach((a,i)=>{
    var 템플릿 = 
      `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${a.title}</h5>
          <p>가격 : ${a.price}</p>
          <button class="buy">구매</button>
      </div>`;
      //실제서비스면 서버로 보냈을듯
    $('.row').append(템플릿);
  });

//! localstorage 숙제
/*
1.카드하단 구매버튼 추가하고 그거 누르면 누른 상품의 이름을 localStorage에 저장하기
2.array항목에 추가되도록하기
*/
/* 
  !cart에 다담음.. 뻘짓..
  $('.buy').click(()=> {
    var arr = [];
  //// push가 있엇음...
    if(localStorage.getItem('cart') != null){
      localStorage.removeItem('cart',ARR);
    }
    else{
      for(i = 0; i < products.length; i++){
        arr.push(products[i].title);
      }
      //products[i].title을 배열화해야함
      var ARR = JSON.stringify(arr);
      localStorage.setItem('cart',ARR);
    }
}); */
//*-----------------------------------
/* $('.buy').eq(0).click(()=>{
  var arr = [];
  arr.push(products[0].title);
  var AR1 = JSON.stringify(arr);
  localStorage.setItem('cart',AR1);
});
//만약 blossom Dress 가 있다면 버튼누른이름으로 바꿔주세요
//? 반복문으로 쉽게 하는방법은 없을까?
$('.buy').eq(1).click(()=>{
  if(localStorage.getItem('cart') != null){
    localStorage.removeItem('cart');
    var arr = [];
    arr.push(products[1].title);
    var AR1 = JSON.stringify(arr);
    localStorage.setItem('cart', AR1);
  }
});
$('.buy').eq(2).click(()=>{
  if(localStorage.getItem('cart') != null){
    localStorage.removeItem('cart');
    var arr = [];
    arr.push(products[2].title);
    var AR1 = JSON.stringify(arr);
    localStorage.setItem('cart', AR1);
  }
}); */
//!코딩애플 localStorage 숙제코드
/*
1.구매버튼누르면
2.지금누른버튼 윗윗 글자를 가져와서
3.localStorage에[글자저장]
*/ 
$('.buy').click((e)=>{
  var title = $(e.target).siblings('h5').text();
  
  //만약에 이미 cart라는 항목이있으면 수정하기
  if(localStorage.getItem('cart') != null){
    var 꺼내기 = JSON.parse(localStorage.getItem('cart'));
    꺼내기.push(title);
    localStorage.setItem('cart',JSON.stringify(꺼내기));
  }
  else{
    localStorage.setItem('cart', JSON.stringify([title]));
  }
  //근데 그게 아니면 
});
  


//!----------숙제-------------

//todo 가격순정렬버튼
$('#price').click(function(){
  products.sort(function(a,b){
  return a.price - b.price;
});
$('.row').html('');
template(products);
})

//todo 상품명 다나가순 정렬 버튼
//버튼클릭시
$('#title').click(function(){
  //product내림차순정렬
  var descend= products.sort(function(a,b){
    if(a.price > b.price) return -1;
    else if(b.price>a.price) return 1;
    else return 0;
  })
  $('.row').html('');
  template(descend);
})

//버튼에 넣어줌
//html 초기화후 보여주기

//todo 6만원이하상품버튼
$('#price-6').click(function(){
  var newArray2 = products.filter(data => data.price < 60000);
  $('.row').html('');
  template(newArray2);
})
//------------------------------------------

//* 상품추가 함수
var template = data => {
  data.forEach((a,i)=>{
    var 템플릿 = 
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${a.title}</h5>
            <p>가격 : ${a.price}</p>
        </div>`;
      $('.row').append(템플릿);
  });
}
//!더보기버튼-----------------
let count = 0;
  $('#more').on('click',() => {
    //? 만약 for문으로 바꿔준다면 어느범위까지 설정을 해야하는걸까??
    if(count == 0){
      $.get('https://codingapple1.github.io/js/more1.json').done(data => {
        template(data);
        count++;
      });
    }
    else if(count == 1){
      $.get('https://codingapple1.github.io/js/more2.json').done(data => {
        template(data);
        count++;
      });
    }
  });
  
// let 갯수 = products.length;
/* for(let i=0; i < 갯수; i++){
  $('.card-title')[i].innerHTML = products[i].title;
  $('.card-price')[i].innerHTML = products[i].price;
}  */

//!-- ajax 요청 post랑 get하는방법 
//ajax 요청
/* $.get('https://codingapple1.github.io/hello.txt').done(data => {
  console.log(data);
})
.fail(()=>{
  console.log('실패함');
})

$.get('https://codingapple1.github.io/price.json').done(data => {
  console.log(data.price);
}) */




