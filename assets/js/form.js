const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const btn = document.getElementById("form-btn");


const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const numError = document.getElementById("numError");

// Function to clear the input fields




form.addEventListener("submit", (e) => {
 

  let email_valid =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let num_valid = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

  if (name.value === "" || name.value == null) {
    e.preventDefault();
    nameError.innerHTML = "The name is Required";
   
  } else {
    nameError.innerHTML = "";
  }

  if (!email.value.match(email_valid)) {
    e.preventDefault();
    emailError.innerHTML = "Enter valid Email";
    
  } else {
    emailError.innerHTML = "";
  }

  if (!phone.value.match(num_valid)) {
    e.preventDefault();
    numError.innerHTML = "Enter valid Number";
 
  } else {
    numError.innerHTML = "";
  }

  function clearFields() {
    // Reset the form, which includes clearing all input fields and hidden inputs
    form.reset();

    // Clear any additional error messages or other elements if needed
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    numError.innerHTML = "";
}
clearFields();

});


