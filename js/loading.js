let welcom = "Welcome to My World";
let text = welcom.split("");
console.log(text);
setTimeout(

  function(){
    let j = welcom.length - 1;
let countreverse = setInterval(function () {
  pent.innerHTML = `${welcom.slice(0, j)}`;
  anmi.classList.add("anmi");

  if (j == 0) {
    pent.innerHTML = "";
    j = welcom.length - 1;
    clearInterval(countreverse);
    removeLetters();
  }
  j--;
}, 100);

function removeLetters() {
  let i = 0;
  let count = setInterval(function () {
    pent.innerHTML += text[i];
    i++;
    if (i == text.length + 1) {
      clearInterval(count);
      pent.innerHTML = "Welcome to My World";
      anmi.classList.remove("anmi");


    }
  }, 250);
}
  },200
)
setTimeout(
  function(){
  // Opens Google in a new tab
// Navigates to Google in the same tab
window.location.href = "main.html";


  },7000
)