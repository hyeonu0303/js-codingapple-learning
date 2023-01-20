var navtitle = `<div class="justify-content-start container-fluid">
                  <div style="margin-left:10px">
                  <span class="navbar-brand mb-0 h1 text-light">집꾸미기</span>
                  </div>
                  <div style="margin-left:10px">
                    <span class="navbar-brand mb-0 fs-5 text-light">Home</span>
                  </div>
                  <div style="margin-left:10px">
                    <span class="navbar-brand mb-0 fs-6 text-secondary">스토어</span>
                  </div>
                  <div style="margin-left:10px">
                    <span class="navbar-brand mb-0 fs-6 text-secondary">시공견적</span>
                  </div>
                </div>`

$('.navbar').append(navtitle);

/*
1. card에 쓸 데이터 json파일에서 가져오기
2. card 템플릿만들기
3. card 템플릿 개수만큼 반복
4. card html에 추가 
*/

//! card추가
$.get('store.json').done(data => {
  $.each(data,(itemA, itemB)=>{
    for(let i = 0; i < itemB.length; i++){
      var card  =  `<div class="card" style="width: 18rem;">
                        <img src="/웹프로젝트/pr${i+1}.JPG" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${itemB[i].title}</h5>
                          <p class="card-text">${itemB[i].brand}</p>
                          <p class="card-text">가격: ${itemB[i].price}</p>
                          <a href="#" class="btn btn-dark">담기</a>
                        </div>
                      </div>` 
      $('#card').append(card);
    }
  })
})





//input클릭하면 value값 없애기
$('input').click(()=>{
  $('input').val(''); 
})
//!검색기능
//식기세척기면 식,기,세,척,기? 
