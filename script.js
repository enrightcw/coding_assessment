//var declarations
var headerEl = document.querySelector(".header");
var timerEl = document.querySelector(".timer");
var mainEl = document.querySelector(".main");
var startBtn = document.createElement("button")
document.body.appendChild(startBtn);
startBtn.setAttribute("style", "display: block; height: 60px; width: 80px; margin: auto");
startBtn.innerHTML = "Start!" ;

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
    button.style.display = 'none'; 
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " remaining.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        scoreScreen();
      }
  
    }, 1000);
}


//Score screen and inital log of that user's score

function scoreScreen() {
    timerEl.textContent = "Finished!";

    //need a box, score display, user input box locked to 3 char if possible, a submit button, and then store in local storage array, to be used on a high score screen, with a clear button, and a return/go back button.
  
}

//Start Button
//clear start button, and then start timer, and start questions. 

function startGame(event) {
    event.preventDefault();
   
    

}

//high scores screen



startBtn.addEventListener("click", countdown);
