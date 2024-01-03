let offset = 0; //смещение от левого края
const sliderLine = document.querySelector(".slider-line");
const btnPrevious = document.querySelector(".slider-previous");
const btnNext = document.querySelector(".slider-next");
let w = sliderLine.offsetWidth;
console.log(w)

btnNext.addEventListener("click", function () {
  offset = offset + 150;
  if (offset > w) {
    offset = w;
  }
  sliderLine.style.left = -offset + "px";
});


btnPrevious.addEventListener("click", function () {
  offset = offset - 150;
  if (offset < 0) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});


