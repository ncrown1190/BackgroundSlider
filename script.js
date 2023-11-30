// import Swiper from "swiper";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

var swiper = new Swiper(".swiper", {
  grabCursor: true,
  speed: 500,
  effect: "slide",
  loop: true,
  mousewheel: {
    invert: false,
    sensitivity: 1,
  },
});

const swiper = document.querySelector(".swiper").swiper;

swiper.enable();
