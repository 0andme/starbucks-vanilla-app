// HTML 요소 찾기 (가장 먼저 나온 요소 1개)
// let boxEL = document.querySelector('.box');

// HTML 요소 모두 검색/찾기
// let boxELs = document.querySelectorAll('.box');

// 찾은 요소를 반복해서 함수 실행
// 첫 번째 인수 : 반복 중인 요소
// 두 번째 매개변수 : 반복 중인 번호 
// class로 box를 가지고 있는 모든 요소에 class 추가
/*
boxELs.forEach(function(boxEl,index){
  boxEl.classList.add(`order-${index+1}`)
  console.log(index,boxEl);
});
*/

const boxEl = document.querySelector('.box');
// getter 값을 얻는 용도
console.log(boxEl.textContent);
let res = boxEl.addEventListener("click",
  function () {
    // setter 값을 지정하는 용도
    boxEl.textContent = "HI"
  })



// res.addEventListener();
// res.addEventListener(1, 2);
// res.addEventListener("click", 2);
/*
boxEL.addEventListener("click",
  function () {
    console.log("클릭");
    boxEL.classList.add('active');
    console.log(
      boxEL.classList.contains('active')
      );
  })
*/

/*
// boxEL에 active 클래스 추가
boxEL.classList.add('active');
// boxEL에 active 클래스가 있는지 확인
let isContains = boxEL.classList.contains('active');
console.log(isContains);
*/

/*
// boxEL에 active 클래스 삭제
boxEL.classList.remove('active');
// boxEL에 active 클래스가 있는지 확인
let isContains = boxEL.classList.contains('active');
console.log(isContains);
*/