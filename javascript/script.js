const discoverCards = document.querySelector(".discover_cards");
const discoverBtn = document.querySelector(".discoverBtn");

const heartBtn = document.querySelector(".heart");
const numberValue = document.querySelector(".number_value");

// const burgerMenu = document.querySelector(".burgerMenu");
// burgerMenu.addEventListener("click", () => {
//   burgerMenu.style.width = "250px";
// });

discoverCards.addEventListener("click", () => {
  window.location.href = "../Html/artistPage.html";
});

discoverBtn.addEventListener("click", () => {
  window.location.href = "../Html/artistPage.html";
});

heartBtn.addEventListener("click", () => {
  heartBtn.style.backgroundColor = "red";
});
