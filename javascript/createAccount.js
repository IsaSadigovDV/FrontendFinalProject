const createInputs = document.querySelectorAll(".inputs>input");
const vali1 = document.querySelector(".vali1");
const vali2 = document.querySelector(".vali2");
const vali3 = document.querySelector(".vali3");
const vali4 = document.querySelector(".vali4");
const vali5 = document.querySelector(".vali5");
const rightbottom = document.querySelector(".right_bottom");
vali1.style.fontSize = "16px";
vali2.style.fontSize = "16px";
vali3.style.fontSize = "16px";
vali4.style.fontSize = "16px";
let checkstatus = true;
createInputs[0].addEventListener("keyup", () => {
  if (!createInputs[0].value.trim()) {
    vali1.style.color = "red";
    vali1.textContent = "Plese enter username correctly";
    checkstatus *= false;
  } else {
    vali1.style.color = "green";
    vali1.textContent =null;
  }
});

createInputs[1].addEventListener("keyup", () => {
  if (!ValidateEmail(createInputs[1].value.trim())) {
    vali2.style.color = "red";
    vali2.textContent = "Please enter valid email";
    checkstatus *= false;
  } else {
    vali2.style.color = "green";
    vali2.textContent = null;
  }
});


createInputs[2].addEventListener("keyup", () => {
  if (!ValidatePassword(createInputs[2].value.trim())) {
    vali3.style.color = "red";
    vali3.textContent = "Please enter valid Password";
    checkstatus *= false;
  } else {
    vali3.style.color = "green";
    vali3.textContent = null;
  }
});


createInputs[3].addEventListener("keyup", () => {
  if (createInputs[2].value.trim() != createInputs[3].value.trim()) {
    vali4.style.color = "red";
    vali4.textContent = "Please enter valid Password";
    checkstatus *= false;
  } else {
    vali4.style.color = "green";
    vali4.textContent = null;
  }
});


vali5.addEventListener("click", () => {
  const newwtoast = document.createElement("div");
  const newwp = document.createElement("p");
  newwtoast.style.width = "250px";
  newwtoast.style.height = "60px";
  newwp.style.color = "white";
  newwp.style.fontSize = "16px";
  newwtoast.style.display = "flex";
  newwtoast.style.justifyContent = "center";
  newwtoast.style.alignItems = "center";
  newwtoast.style.position = "fixed";
  document.body.style.position = "relative";
  newwtoast.style.left = "75vw";
  newwtoast.style.bottom = "85vh";
  console.log(createInputs[2].value.trim() == createInputs[3].value.trim());
  console.log(ValidatePassword(createInputs[2].value.trim()));
  console.log(ValidateEmail(createInputs[1].value.trim()));
  console.log(!!createInputs[0].value.trim());
  if ((createInputs[2].value.trim() == createInputs[3].value.trim())&&(ValidatePassword(createInputs[2].value.trim()))&&(ValidateEmail(createInputs[1].value.trim()))&&(!!createInputs[0].value.trim())) {
    newwtoast.style.backgroundColor = "green";
    newwp.textContent = "Success";
  } 
  else {
    newwtoast.style.backgroundColor = "red";
    newwp.textContent = "Error";
  }

  newwtoast.append(newwp);
  rightbottom.append(newwtoast);

  setTimeout(() => {
    newwtoast.remove();
  }, 3000);
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function ValidatePassword(password) {
  if (
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
      password
    )
  ) {
    return true;
  }
  return false;
}
