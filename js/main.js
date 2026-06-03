/* 
window에 스크롤이 생기면 할일
  그 스크롤양이 0보다 크면 body에 active 추가
  0이면 active 제거
*/
// const body = document.body;
const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const slideWrapper = document.querySelector(".slidewrapper"),
  slideContainer = slideWrapper.querySelector(".slidecontainer"),
  slides = slideContainer.querySelectorAll("li"),
  slideCount = slides.length,
  prevBtn = slideWrapper.querySelector(".prev"),
  nextBtn = slideWrapper.querySelector(".next");
let currentIdx = 0;

const testimonialSlide = new Swiper(".testimonial", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
