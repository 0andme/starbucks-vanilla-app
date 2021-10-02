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
  loop:true
});