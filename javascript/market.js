const searchInput=document.querySelector(".searchedinput");
const searchcards=document.querySelector(".cards");
const searhcard=document.querySelectorAll(".card");




searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    Array.from(searhcard).forEach((row) => {
      const name = row.querySelector(".search1").toLowerCase();
      const surname = row.querySelector(".search2").toLowerCase();

      if (
        name.includes(searchTerm) ||
        surname.includes(searchTerm) 
      ) {
        row.style.display = "flex";
      } else {
        row.style.display = "none";
      }
    });
  });