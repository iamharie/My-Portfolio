const name = document.querySelector(".name");
const email = document.querySelector(".email");
const text = document.querySelector(".trxt-area");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  alert("your response was sent successfully");
});

//Sticky Navigation
const nav = document.querySelector(".nav");
const section2 = document.querySelector(".skills-section");
const initialCoords = section2.getBoundingClientRect();
console.log(initialCoords);
console.log(section2);

// window.addEventListener("scroll", function (e) {
//   e.preventDefault();
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
// });

//intersectionObserver
// const allSection = document.querySelectorAll(".sec");
// console.log(allSection);

// const callbackFun = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

// const options = {
//   root: null,
//   threshold: 0.1,
// };
// const sectionObserver = new IntersectionObserver(callbackFun, options);

//Observing the section

// allSection.forEach((sec) => {
//   sectionObserver.observe(sec);
//   console.log(sec);
//   sec.classList.add("section--hidden");
// });

//Carousel
const carouselSlide = document.querySelector(".carousel-slide");
const carouselItems = document.querySelectorAll(".carousel-item");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 0;
const size = carouselItems[0].clientWidth;

// Event listeners for buttons
nextBtn.addEventListener("click", () => {
  if (counter >= carouselItems.length - 1) return; // Prevent sliding beyond the last item
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return; // Prevent sliding beyond the first item
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

// Update the size on window resize
window.addEventListener("resize", () => {
  const newSize = carouselItems[0].clientWidth;
  carouselSlide.style.transform = `translateX(${-newSize * counter}px)`;
});
