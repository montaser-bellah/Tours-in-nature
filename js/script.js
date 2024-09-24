

const stories = document.querySelectorAll(".story");
const btnLeft = document.querySelector(".button-left");
const btnRight = document.querySelector(".button-right");



const gotToStory = function(currentStory) {
  stories.forEach((story, index) =>{
    story.style.transform = `translateX(${125*  ( index - currentStory)}%) skewX(-12deg)` ;
  }) ;
}



let currentStory = 0 ;
const storiesCount = stories.length ;

// in the First :>
// initial State :
gotToStory(0);

//Implementing the Right button: 
btnRight.addEventListener("click", function() {
  currentStory === storiesCount-1 ? currentStory=0 : currentStory++ ;

  gotToStory(currentStory);
});


// Implementing the Left button :
btnLeft.addEventListener("click", function() {
  currentStory ===0  ?  currentStory= storiesCount-1 : currentStory--;

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
    rootMargin : `-${navCoordinates.height}px` ,
  
}

const observerCallback = function(entries) {
  // using destructuring :>
  const [entry] = entries ;

  //Using Ternary Operator :>
  !entry.isIntersecting ? nav.classList.add("sticky"): nav.classList.remove("sticky");

  // adding sticky class if the entry isn't intersecting with the window ;
}

const headerObserver = new IntersectionObserver(observerCallback, options);
headerObserver.observe(header);

