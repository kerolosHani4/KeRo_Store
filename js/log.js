// Get the user input fields and other DOM elements
let user = document.querySelector(`.landding form input[type="text"]`);
let pass = document.querySelector(`.landding form input[type="password"]`);
let one = document.querySelector(".one"); // Error message for user field
let two = document.querySelector(".two"); // Error message for password field
let notValid = document.querySelector(".notValid"); // Error message for invalid captcha

// On form submit, validate the input fields
document.forms[0].onsubmit = function (e) {
  let emptyUser = false; // Flag to check if user field is empty
  let emptyPass = false; // Flag to check if password field is empty
  let check = false; // Flag to check if captcha is invalid

  // Check if user or password fields are empty
  if (user.value == "") emptyUser = true;
  if (pass.value == "") emptyPass = true;

  // Validate the captcha-like check
  if (
    document.getElementById("letterNum").value !=
    random.innerHTML.split(" ").join("")
  ) {
    check = true;
  }

  // If either user or password is empty, show appropriate messages
  if (emptyUser || emptyPass) {
    if (emptyUser) {
      console.log("dv"); // Log for debugging purposes
      one.style.setProperty("display", "inline-block");
      notValid.style.setProperty("display", "none");
      e.preventDefault(); // Prevent form submission
    } else {
      one.style.setProperty("display", "none");
    }

    if (emptyPass) {
      two.style.setProperty("display", "inline-block");
      notValid.style.setProperty("display", "none");
      e.preventDefault(); // Prevent form submission
    } else {
      two.style.setProperty("display", "none");
    }
  } else {
    // If captcha check fails, prevent submission and show error message
    if (check) {
      
      notValid.style.setProperty("display", "inline-block");
      one.style.setProperty("display", "none");
      two.style.setProperty("display", "none");
      document.getElementById("letterNum").value = "";
      e.preventDefault(); // Prevent form submission
      checkBox(); // Refresh the captcha box
    }
    
  }

};

// Show/hide password functionality
let show = document.querySelector(".landding form i");
let line = document.querySelector(".landding form .pass span");

show.onclick = function () {
  // Toggle between password and text types to show or hide password
  if (pass.type === "password") {
    pass.type = "text"; // Show password
    line.classList.remove("show");
  } else {
    pass.type = "password"; // Hide password
    line.classList.add("show");
  }
};

// Get the captcha container
let random = document.querySelector(".landding form .check .random h5");

// Function to generate random captcha-like code
function checkBox() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Possible letters for captcha

  // Generate random number and letter combination
  let nl =
    Math.floor(Math.random() * 100) + // Random number
    letters[Math.floor(Math.random() * letters.length)]; // Random letter

  // Display the code with spaces between characters
  random.innerHTML = nl.split("").join(" ");
}

// Call checkBox function to initialize the captcha on page load
checkBox();
