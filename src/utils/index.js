window.addEventListener("scroll", function () {
  const popup = document.querySelector(".popup");
  const scrollPosition = window.scrollY;
  console.log("JO");

  if (scrollPosition > 500) {
    popup.classList.add("opacity-100");
  } else {
    popup.classList.remove("opacity-100");
  }
});
function pushToUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// // const pushToUp = document.querySelector(".push");
// pushToUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });

// let links = document.querySelectorAll(".list");
// let item = document.querySelector(".item");
// let item_small = document.querySelector(".item-small");

// const clickHandler = (el) => {
//   links.forEach((link) => {
//     link.classList.remove("visible");
//   });
//   el.classList.add("visible");
// };
// links.forEach((link, index) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Update background position
//     if (index === 0) {
//       item.style.transform = `translateX(${125 * index}%)`;
//       item.style.width = "45px";
//     } else if (index === 1) {
//       item.style.transform = `translateX(${110 * index}%)`;
//       item.style.width = "80px";
//     } else if (index === 2) {
//       item.style.transform = `translateX(${73 * index}%)`;
//       item.style.width = "160px";
//     } else if (index === 3) {
//       item.style.transform = `translateX(${137 * index}%)`;
//       item.style.width = "95px";
//     } else if (index === 4) {
//       item.style.transform = `translateX(${178 * index}%)`;
//       item.style.width = "70px";
//     } else if (index === 5) {
//       item.style.transform = `translateX(${134 * index}%)`;
//       item.style.width = "90px";
//     } else {
//       console.log("error");
//     }
//     clickHandler(e.currentTarget);
//   });
// });
// links.forEach((link, index) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Update background position
//     if (index === 0) {
//       item_small.style.transform = `translateY(${500 * index * 1}px)`;
//       item_small.style.left = "0px";
//       item_small.style.width = "100%";
//     } else if (index === 1) {
//       item_small.style.transform = `translateY(${2000 * index}%)`;
//       item_small.style.left = "-21px";
//       item_small.style.width = "116px ";
//     } else if (index === 2) {
//       item_small.style.transform = `translateY(${2000 * index}%)`;
//       item_small.style.left = "-90px";
//       item_small.style.width = "250px";
//     } else if (index === 3) {
//       item_small.style.transform = `translateY(${2000 * index}%)`;
//       item_small.style.left = "-33px";
//       item_small.style.width = "140px";
//     } else if (index === 4) {
//       item_small.style.transform = `translateY(${2000 * index}%)`;
//       item_small.style.left = "-20px";
//       item_small.style.width = "110px";
//     } else if (index === 5) {
//       item_small.style.transform = `translateY(${2000 * index}%)`;
//       item_small.style.left = "-30px";
//       item_small.style.width = "135px";
//     } else {
//       console.log("error");
//     }
//     clickHandler(e.currentTarget);
//   });
// });

