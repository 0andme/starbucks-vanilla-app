const searchEl = document.querySelector(".search");
const searchInputEL = searchEl.querySelector("input");


searchEl.addEventListener("click", function () {
  searchInputEL.focus();
})

searchInputEL.addEventListener("focus", function () {

  searchEl.classList.add("focused");
  searchInputEL.setAttribute("placeholder", "통합검색");

})
searchInputEL.addEventListener("blur", function () {

  searchEl.classList.remove("focused");
  searchInputEL.setAttribute("placeholder", "");

});

// ! 배지
const badgeEl = document.querySelector(" header .badges");
// window.addEventListener("scroll",function(){
//   console.log(window.scrollY);
// })
window.addEventListener("scroll", _.throttle(function () {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display="none";
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: "none"
    });
  } else {
    //배지 보이기
    // badgeEl.style.display="block";
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: "block"
    });
  }
}, 300));

// ! 요소 순서대로 나타내기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });

})

// ! 공지사항 스와이퍼
// new Swiper(선택자,{옵션})
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});

// ! 프로모션 카드 스와이퍼
new Swiper(".promotion .swiper", {
  // 가로 슬라이드는 기본 옵션
  direction: "horizontal",
  // 한 번에 보여줄 슬라이드 개수
  slidesPerView: 3,
  // 슬라이드 사이 여백(단위 10px)
  spaceBetween: 10,
  // 1번 슬라이드가 가운데 보이기
  centeredSlides: true,
  // 마지막 슬라이드가 왼쪽에도 보이게 하기 위함
  loop: true,
  // 자동 슬라이드 시간 기본값 : 3000 단위 : ms
  // autoplay: {delay : 500},
  // 페이지 번호 요소 선택자
  pagination: {
    el: '.promotion .swiper-pagination',
    // 사용자의 페이지  번호 요소 제어
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
}
);