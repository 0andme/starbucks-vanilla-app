let boxEL = document.querySelector('.box');
console.log(boxEL);

// res.addEventListener();

// res.addEventListener(1, 2);

// res.addEventListener("click", 2);

boxEL.addEventListener("click",
  function () {
    console.log("클릭");
  })
// boxEL에 active 클래스 추가
boxEL.classList.add('active');
// boxEL에 active 클래스가 있는지 확인
let isContains = boxEL.classList.contains('active');
console.log(isContains);

// boxEL에 active 클래스 삭제
boxEL.classList.add('active');
// boxEL에 active 클래스가 있는지 확인
let isContains = boxEL.classList.contains('active');
console.log(isContains);