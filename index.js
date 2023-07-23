const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("button");
const emailError = document.getElementById("emailError");
const table = document.getElementById("table");
const insert = document.getElementById("insert");
const table1 = document.getElementById("table1");
const dismissButton = document.getElementById("button1");
const icon = document.getElementById("icon");

table1.style.display="none";

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
submitButton.addEventListener("click", (event) => {
  event.preventDefault(); 

  const email = emailInput.value;
  if (email.trim() === "" || !isValidEmail(email)) {
    emailError.style.display = "grid"; 
    emailInput.classList.add("error");
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("error");
    table.style.display = "none";
    table1.style.display="grid";
    insert.textContent = email;
  }
});

dismissButton.addEventListener("click", (event) =>{
  event.preventDefault(); 
  table1.style.display = "none";
  table.style.display="grid";
});

