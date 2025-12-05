// js loaded confirmation
console.log("portfolio loaded!");

// get the current year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// fade in hero section on page load
window.addEventListener("load", function () {
  const hero = document.getElementById("hero");
  setTimeout(function () {
    hero.classList.add("fade-in");
  }, 100);
});

// validate form
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const nameErr = document.getElementById("name-error");
  const emailErr = document.getElementById("email-error");
  const messageErr = document.getElementById("message-error");

  // clear previous errors
  nameErr.textContent = "";
  emailErr.textContent = "";
  messageErr.textContent = "";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    nameErr.textContent = "Please enter your name properly.";
    isValid = false;
  }

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    emailErr.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (message === "" || message.trim().length === 0) {
    messageErr.textContent = "Please enter a message.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.querySelector("form").reset();
    return true;
  } else {
    return false;
  }
}

function resetErrors() {
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";
}
