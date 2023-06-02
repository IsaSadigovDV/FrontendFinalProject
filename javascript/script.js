const creatorCard = document.querySelectorAll(".creators_cards");

const heartBtn = document.querySelector(".heart");
const numberValue = document.querySelector(".number_value");

// const burgerMenu = document.querySelector(".burgerMenu");
// burgerMenu.addEventListener("click", () => {
//   burgerMenu.style.width = "250px";
// });

creatorCard.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "../Html/artistPage.html";
  });
});

heartBtn.addEventListener("click", () => {
  heartBtn.style.backgroundColor = "red";
});
