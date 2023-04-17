const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const passwordInput = document.getElementById("password");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const interestsInputs = document.querySelectorAll('input[name="interests"]');
const countryInput = document.getElementById("country");

form.addEventListener("submit", (event) => {
  let hasError = false;

  // validate name input
  if (nameInput.value === "") {
    document.getElementById("nameError").textContent = "Please enter your name";
    hasError = true;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // validate age input
  if (ageInput.value === "" || ageInput.value < 0) {
    document.getElementById("ageError").textContent =
      "Please enter a valid age";
    hasError = true;
  } else {
    document.getElementById("ageError").textContent = "";
  }

  // validate email input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    hasError = true;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // validate birthdate input
  const currentDate = new Date();
  const birthdate = new Date(birthdateInput.value);
  const age = currentDate.getFullYear() - birthdate.getFullYear();
  if (isNaN(birthdate.getTime()) || age < 0 || age > 150) {
    document.getElementById("birthdateError").textContent =
      "Please enter a valid birthdate";
    hasError = true;
  } else {
    document.getElementById("birthdateError").textContent = "";
  }

  // validate password input
  if (passwordInput.value.length < 8) {
    document.getElementById("passwordError").textContent =
      "Please enter a password with at least 8 characters";
    hasError = true;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // validate gender input
  let genderChecked = false;
  for (const genderInput of genderInputs) {
    if (genderInput.checked) {
      genderChecked = true;
      break;
    }
  }
  if (!genderChecked) {
    document.getElementById("genderError").textContent =
      "Please select a gender";
    hasError = true;
  } else {
    document.getElementById("genderError").textContent = "";
  }

  // validate interests input
  let interestsChecked = false;
  for (const interestsInput of interestsInputs) {
    if (interestsInput.checked) {
      interestsChecked = true;
      break;
    }
  }
  if (!interestsChecked) {
    document.getElementById("interestsError").textContent =
      "Please select at least one interest";
    hasError = true;
  } else {
    document.getElementById("interestsError").textContent = "";
  }

  // validate country input
  if (countryInput.value === "") {
    document.getElementById("countryError").textContent =
      "Please select a country";
    hasError = true;
  } else {
    document.getElementById("countryError").textContent = "";
  }

  if (hasError) {
    // prevent form submission if there are validation errors
    event.preventDefault();
  }
});
