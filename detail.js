    //! html생성법 1
    /* var a = document.createElement('p');
    a.innerHTML = '안녕';
    document.querySelector('#test').appendChild(a); */
    //! html생성법 2
    /* var 템플릿 = '<p>안녕</p>';
    document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿); */
    //!jquery
    //$('#test).append(템플릿);
    
    // *서버랑 통신할때
    let pants = [28, 30, 32, 34]; //서버에서 보낸
    let shirts = [95,100,105];
    
    // !모자,셔츠,바지
    // ?다시이해필요할듯
    $('.form-select').eq(0).on('input',() => {
      var product = $('.form-select').eq(0).val();
      if(product == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide')
        $('.form-select').eq(1).html('');
        shirts.forEach((item) => {
          $('.form-select').eq(1).append(`<option>${item}</option>`)
        })
      }
      else if(product == '모자'){
        $('.form-select').eq(1).addClass('form-hide');
      }
      
      else if(product == '바지'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        // * 길고복잡해보임
        //!array에만 붙일수잇음 배열안의 갯수만큼 반복해줌
        //확장성 있는코드가 완성됨
        pants.forEach((a) => {
          //option태그 생성해주세요~ 
          $('.form-select').eq(1).append(`<option>${a}</option>`);
        })
        }
      })
      var obj = {name:'kim', age: 20}
      //obj 자료하나하나꺼내고싶을땐
      for(var key in obj){
        console.log(obj[key]);
      }
    // !array배열 (순서O)
    /* var car = ['소나타',50000,'white'];
    object자료형 이름붙여서 가능 (순서X) 
    var car2={name:'소나타', price:5000}
    var car3 = {name:'소나타', price: [50000, 30000, 40000]} */
    //          key           value
    
    // *서버렌더링형식임 서버가 보내온 데이터형식을 html로 넣어주는것
    // ! client-side rendering
    // 데이터바인딩 쉽게 해주는 jquery react,vue등
    /*  document.querySelector('.name').innerHTML = car2.name;
    document.querySelector('.price').innerHTML = car2.price; */
    /* $('.form-select').eq(0).on('input',function(e){
      var product = e.currentTarget.eq(0).val();
      if(product == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide')
      } 
    })*/
    /* $('.form-select').eq(0).on('input',function(e){
      var product = this.val();
      if(product == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide')
      } 
    })*/
    
    
    