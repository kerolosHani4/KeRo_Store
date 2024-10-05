let showitems = document.querySelector(
  "header .container .sections :nth-last-child(2)"
);
let listItems = document.querySelector("header .container .sections .links");
let items = document.querySelector(
  "header .container .sections :nth-last-child(2) + .links"
);

let header = document.querySelector("header");

showitems.onclick = function () {
  listItems.classList.toggle("show");
  console.log(listItems.classList);
};

document.onclick = function (e) {
  if (!e.target.className.includes("fa-list-ul") && e.target.id != "img") {
    listItems.classList.remove("show");
  }
};

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};
const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};
const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

let video = document.querySelectorAll(".videos .grid .item .list .list-item");
let novideos = document.querySelector(".videos .grid .item img");
let para = document.querySelector("p.para");
let iframe = document.querySelector(".videos .grid .item iframe");

function delay() {
  setTimeout(() => {
    iframe.style.display = "block";
    novideos.style.display = "none";
  }, 300);
}

video[0].firstElementChild.onclick = function () {
  iframe.setAttribute(
    "src",
    `https://www.youtube.com/embed/RlUw8mZMmVw?si=MVrEicP6FHt2PlPj`
  );
  para.innerHTML = `${video[0].firstElementChild.innerHTML}`;
  delay();

};

video[1].firstElementChild.onclick = function () {
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/Rck3BALhI5c?si=vdV6dHFX6DXSHVTa"
  );
  para.innerHTML = `${video[1].firstElementChild.innerHTML}`;
  delay();
};

video[2].firstElementChild.onclick = function () {
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/iBjirLD5X7Q?si=uvlnunwM_tbcPBPl"
  );
  para.innerHTML = `${video[2].firstElementChild.innerHTML}`;
  delay();
};

video[3].firstElementChild.onclick = function () {
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/aFIyiMhHhJA?si=eSTQH8UKBIkkM2L6"
  );
  para.innerHTML = `${video[3].firstElementChild.innerHTML}`;
  delay();
};
video[4].firstElementChild.onclick = function () {
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/eHV1aOnu7oM?si=n7CJpBRgYTHdbHw0" 
  );
  para.innerHTML = `${video[4].firstElementChild.innerHTML}`;
  delay();
};

video[5].firstElementChild.onclick = function () {
  iframe.setAttribute(
    "src",
"https://www.youtube.com/embed/lYvijnPI1Rg?si=QTl4pT3HCLVOUWxN"
  );
  para.innerHTML = `${video[5].firstElementChild.innerHTML}`;
  delay();
};



video[6].firstElementChild.onclick = function () {
  iframe.setAttribute(
    "src",
"https://www.youtube.com/embed/egksNbkEtMI?si=tod9DwSRqvvNjR2w"
  );
  para.innerHTML = `${video[6].firstElementChild.innerHTML}`;
  delay();
};



let num=document.querySelectorAll(".stats .state-item h1")
function counterOne(){
  let i=0
let counter =setInterval(
  function(){
    num[0].innerHTML=`${i}`;
    i++;
    if(i==151){
      clearInterval(counter)
    }
  }
  ,20)
}
function counterTwo(){
  let i=0
let counter =setInterval(
  function(){
    num[1].innerHTML=`${i}`;
    i++;
    if(i==136){
      clearInterval(counter)
    }
  }
  ,20)
}
function counterThree(){
  let i=0
let counter =setInterval(
  function(){
    num[2].innerHTML=`${i}`;
    i++;
    if(i==51){
      clearInterval(counter)
    }
  }
  ,50)
}
function counterFour(){
  let i=0
let counter =setInterval(
  function(){
    num[3].innerHTML=`${i}`;
    i++;
    if(i==201){
      clearInterval(counter)
    }
  }
  ,20)
}
counterOne();
counterTwo();
counterThree();
counterFour();

let choose =document.querySelectorAll(".pricing .item .part a")
let popup =document.querySelector(".popup")
let okButton =document.querySelector(".popup .box button")

choose[0].onclick=function(e){
  e.preventDefault();
  popup.style.display="block"
  
}
choose[1].onclick=function(e){
  e.preventDefault();
  popup.style.display="block"
  
}
choose[2].onclick=function(e){
  e.preventDefault();
  popup.style.display="block"
  
}
okButton.onclick=function(e){
  e.preventDefault();
  popup.style.display="none"
  
}