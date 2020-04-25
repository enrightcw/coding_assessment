//var declarations

// var headerEl = document.querySelector(".header");
var timerEl = document.querySelector(".timer");
// var mainEl = document.querySelector(".main");
var cardEl = document.querySelector(".card")

//Start button appear and styling
var startBtn = document.createElement("button")
document.body.appendChild(startBtn);
startBtn.setAttribute("style", "display: block; height: 60px; width: 80px; margin: auto");
startBtn.innerHTML = "Start!" ;
startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startGame);

var secondsLeft = 10;
var score = 0;
var total = 0;
var incorrect = 0;

//Questions go here
var questions = [{
    "title": "Question One",
    "Choices": [
        "Wrong 1",
        "Wrong 2",
        "Right", 
        "Wrong 3"
    ],
    "title": "Question Two",
    "Choices": [
        "Wrong 1",
        "Wrong 2",
        "Right", 
        "Wrong 3"
    ],
    "title": "Question Three",
    "Choices": [
        "Wrong 1",
        "Wrong 2",
        "Right", 
        "Wrong 3"
    ],
    "title": "Question Four",
    "Choices": [
        "Wrong 1",
        "Wrong 2",
        "Right", 
        "Wrong 3"
    ],
}];


//countdown timer function
function countdown() {
    startBtn.style.display = 'none'; 
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

function startGame(event) {
    event.preventDefault();

    var questionEl = document.querySelector(".card-header");
    cardEl.setAttribute("Style" , "display: block")

    questionEl.textContent = questions[0]['title'] ;

    // for ( let i = 0 ; i < questions.length ; i++){
    //     questionEl.textContent = questions[i]["title"] ;
    //     console.log(questionEl);
    //     console.log(i);
    // }
   
    

}

//high scores screen





