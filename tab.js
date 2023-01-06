/*버튼 0 누르면
- 모든버튼에 붙은 orange클래스명 제거
-버튼0에 orange 클래스명추가
-모든 div에 붙은 show 클래스명 제거
-div0에 show 클래스명 추가*/

/* 
! tab버튼 만들기
$('.tab-button').eq(0).on('click',function(){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(0).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(0).addClass('show');
})
$('.tab-button').eq(1).on('click',function(){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(1).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(1).addClass('show');
})

$('.tab-button').eq(2).on('click',function(){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(2).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(2).addClass('show');
}) */

var 버튼 = $('.tab-button');

/* var 버튼개수 = document.getElementsByClassName('tab-button').length;
for(let i = 0; i<버튼개수; i++){
  $('.tab-button').eq(i).on('click',function(){
    탭열기(i);
  })
} */

function 탭열기(숫자){
  // *파라미터로 바꿔줘야함
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(숫자).addClass('show');
}
  $('.list').click(function(e){
    탭열기(parseInt(e.target.dataset.id))
    
  })


