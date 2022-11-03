const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");
const img = document.querySelector("#bannerImg");
const dots = document.querySelector(".dots");
const textCaroussel = document.querySelector("#banner p");
let dot;
let index = 0;
let numDot;
dots.classList.add("dots");

for (let i = 0; slides.length > i; i++) {
  dot = document.createElement("span");
  dots.append(dot);
  dot.classList.add("dot");
  dot.classList.add(i);
  numDot = document.querySelectorAll(".dot");
}

numDot[0].classList.add("dot_selected");

arrowLeft.addEventListener("click", () => {
  numDot[index].classList.remove("dot_selected");
  if (index === 0) {
    index = 4;
    index--;
    numDot[index].classList.add("dot_selected");
  } else {
    index--;
    numDot[index].classList.add("dot_selected");
  }
  img.src = `./assets/images/slideshow/${slides[index].image}`;
  textCaroussel.innerHTML = slides[index].tagLine;
});

arrowRight.addEventListener("click", () => {
  numDot[index].classList.remove("dot_selected");
  index++;
  if (index === 4) {
    index = 0;
  }
  img.src = `./assets/images/slideshow/${slides[index].image}`;
  textCaroussel.innerHTML = slides[index].tagLine;
  numDot[index].classList.add("dot_selected");
});
