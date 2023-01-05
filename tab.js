/*버튼 0 누르면
- 모든버튼에 붙은 orange클래스명 제거
-버튼0에 orange 클래스명추가
-모든 div에 붙은 show 클래스명 제거
-div0에 show 클래스명 추가*/

/* $('.tab-button').eq(0).on('click',function(){
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

var 버튼개수 = document.getElementsByClassName('tab-button').length;
for(let i = 0; i<버튼개수; i++){
  $('.tab-button').eq(i).on('click',function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  })
}
/* JS로 짜보기 
for(let i =0; i<3;i++){
  document.querySelector('.tab-button')[i].onclick = function(){

    document.querySelector('.tab-button').removeAttribute('orange');
    document.querySelector('.tab-button')[i].('orange');
    document.querySelector('.tab-content').removeClass('show');
    document.querySelector('.tab-content')[i].addClass('show');
  }
  
}
 */
