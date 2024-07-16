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
