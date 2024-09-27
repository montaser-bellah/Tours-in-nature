// basic js Syntax:
const welcomeFun = function() {
  alert("welcome in the Nature Tours ");
}

// this.addEventListener("DOMContentLoaded", welcomeFun);
////////////////////

// 3) variables & data Types :

//old way:>
const myName = "Montaser Bellah Mahmoud Ali Abutaha" ;
const myAge = 21 ;
const isWebDeveloper = true ;

//modern way:
const me = {
  name: "Montaser Bellah Mahmoud Ali Abutaha",
  age: 21 ,
  isWebDeveloper : true 
}

for(let thing in me )console.log(thing);
//////////////////////////

// 4) Basic Operators :
const firstNumber = 2, secondNumber = 23;
let thirdNumber = 24 ;


const result = firstNumber + secondNumber * thirdNumber/ firstNumber  - secondNumber ;

document.write(`my Numbers is ${firstNumber}, ${secondNumber}, ${thirdNumber}`);
document.querySelector(".result").textContent = `Result: ${result}`;

//////////////////////////

// 5) Conditionals (if-else statements) :

function checkAge(age) {

  // using ternary operator :>
  age > 18 ? alert("your age is valid") : alert("your age is'nt valid!");
}

checkAge(prompt("Please Enter Your Age 😒"));

//////////////////////////

//6) Loops : 

// solution 1:
for(let i = 1; i<= 10; i++) console.log(i);

// 2nd solution:
let count = 0 ;
while(count <10) {
  count ++ ;
  console.log(count) ;
}

//////////////////////////

// 7) Event Handling:

const btnChangeBackground = document.querySelector(".btn-background");

//old way:>
// btnChangeBackground.onClick = function(event) {
//   document.body.style.backgroundColor = "red" ;
// }


//Modern way:>
btnChangeBackground.addEventListener("click", function(event){
  document.body.style.backgroundImage = 
  "linear-gradient(to right bottom,rgba(126, 213, 111, 0.8),rgba(40, 180, 133, 0.8)),url(../img/hero.jpg)";
  
  document.body.style.color = "white" ;
} );


//////////////////////////




