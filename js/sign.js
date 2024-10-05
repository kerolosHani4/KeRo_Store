// Show/hide password functionality
let show = document.querySelector(".landding form i");
let line = document.querySelector(".landding form .pass span");

show.onclick = function () {
  // Toggle between password and text types to show or hide password
  if (pass.type === "password") {
    pass.type = "text"; // Show password
    passA.type = "text"; // Show password
    line.classList.remove("show");
  } else {
    pass.type = "password"; // Hide password
    passA.type = "password"; // Hide password
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

let register = document.querySelector(`input[type="submit"]`);
let notValid = document.querySelector(`.notValid`);


document.forms[0].onsubmit = function (e) {
  let check = false;
  
    if (pass.value != passA.value) {
      e.preventDefault(); // Prevent form submission
      checkPass.style.setProperty("display", "inline-block");
      pass.value="";
      passA.value="";
      letterNum.value="";
      checkBox();
    }
    else{
      checkPass.style.setProperty("display", "none");
      if (
        document.getElementById("letterNum").value !=
        random.innerHTML.split(" ").join("")
      ) {
        e.preventDefault(); // Prevent form submission
        CheckBox.style.setProperty("display", "inline-block");
        checkBox();
        letterNum.value="";
      }
      else{
        CheckBox.style.setProperty("display", "none");
      }
    
    }

  };