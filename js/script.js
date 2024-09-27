// *********************************************************************/
const stories = document.querySelectorAll(".story");
const btnLeft = document.querySelector(".button-left");
const btnRight = document.querySelector(".button-right");

const gotToStory = function (currentStory) {
  stories.forEach((story, index) => {
    story.style.transform = `translateX(${
      125 * (index - currentStory)
    }%) skewX(-12deg)`;
  });
};

let currentStory = 0;
const storiesCount = stories.length;

// in the First :>
// initial State :
gotToStory(0);

//Implementing the Right button:
btnRight.addEventListener("click", function () {
  currentStory === storiesCount - 1 ? (currentStory = 0) : currentStory++;

  gotToStory(currentStory);
});

// Implementing the Left button :
btnLeft.addEventListener("click", function () {
  currentStory === 0 ? (currentStory = storiesCount - 1) : currentStory--;

  gotToStory(currentStory);
});

// Implementing teh sticky navigation :>>

// Selecting Elements using class selector :
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

//Getting the Coordinates of nav element :
const navCoordinates = nav.getBoundingClientRect();

// options object for IntersectionObserver API :>
const options = {
  //This means that the intersection will be with viewport :
  root: null,

  threshold: 0,
  rootMargin: `-${navCoordinates.height}px`,
};

const observerCallback = function (entries) {
  // using destructuring :>
  const [entry] = entries;

  //Using Ternary Operator :>
  !entry.isIntersecting
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");

  // adding sticky class if the entry isn't intersecting with the window ;
};

const headerObserver = new IntersectionObserver(observerCallback, options);
headerObserver.observe(header);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const createPopup = function () {
  const markup = `
  <div class="popup hidden ">
    <button class="btn-close">&Cross;</button>
  
    <div class="popup-header">
  
      <img src="../img/favicon.png" alt="" class="popup-img">
  
      <span class="title">Nature Tours</span>
    </div>
      <p class="description"> Welcome in my Website "nature tours" </p>
       
          <button class="ok">
              OK  
          </button>
  </div>
  
  `;

  const main = document.querySelector(".main");
  main.insertAdjacentHTML("beforeend", markup);
};

//call the createPopup():
createPopup();

//Selecting the popup & popup contents :>

const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".btn-close");
const btnOk = document.querySelector(".ok");
const popupDescription = document.querySelector(".description");

////////////////////////////////////
// 1) alert welcome message the HTML Loaded :
//-1st WAY :
window.addEventListener("DOMContentLoaded", function () {
  popup.classList.remove("hidden");
});

//-2nd WAY:
this.addEventListener("load", () => popup.classList.remove("hidden"));
// Close the popup window :
btnClose.addEventListener("click", function () {
  popup.classList.add("hidden");
});

btnOk.addEventListener("click", () => popup.classList.add("hidden"));

//////////////////////////

// 8) Form VAlidation:

const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".form-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("input[type='text']");

  // const email = document.querySelector("input[type='email']") ;

  const email = document.querySelector(".email");

  // معنى الشرط
  //أن يكون الاسم موجود ومن ثم أن لا تكون قيمته عبارة عن قيمة فارغة، وكذلك هو الحال مع البريد الالكتروني

  if (!name.value || name.value === " ") alert("Wrong name");

  if (!email.value || !Array.from(email.value).includes("@"))
    alert("Please Enter a valid Email!");
});
