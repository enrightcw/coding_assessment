//var declarations
var headerEl = document.querySelector(".header");
var timerEl = document.querySelector(".timer");
var mainEl = document.querySelector(".main");
var startBtn = document.createElement("button")


var secondsLeft = 10;
var score = 0;
var total = 0;
var incorrect = 0;

//Questions go here if we don't get feedback on the server calls.
var questions = {
    "Question 1": "Question here",
    "Answers": [
        "Wrong 1",
        "Wrong 2",
        "Right", 
        "Wrong 3"
    ],
    "Question 2": "Question here",
    "Answers": [
        "Wrong 1",
        "Wrong 2",
        "Right", 
        "Wrong 3"
    ],
    "Question 3": "Question here",
    "Answers": [
        "Wrong 1",
        "Wrong 2",
        "Right", 
        "Wrong 3"
    ],
    "Question 4": "Question here",
    "Answers": [
        "Wrong 1",
        "Wrong 2",
        "Right", 
        "Wrong 3"
    ],
}


//countdown timer function
function countdown() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " remaining.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        scoreScreen();
      }
  
    }, 1000);
}


//Score screen and inital log
function scoreScreen() {
    timerEl.textContent = "Finished!";

    //need a box, score display, user input box locked to 3 char if possible, a submit button, and then store in local storage array, to be used on a high score screen.
  
}

//Start Button
function start(button) {
    var buttonVal = button.name,
    textbox = document.getElementById('input_' + buttonVal);
    textbox.value = "Play!" ;
}
  




start.addEventListener("click", countdown);