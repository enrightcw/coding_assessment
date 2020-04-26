//var declarations

// var headerEl = document.querySelector(".header");
var timerEl = document.querySelector(".timer");
var answerEl = document.querySelector(".card-body");
var cardEl = document.querySelector(".card")
var questionEl = document.querySelector(".card-header");
var answerEl = document.querySelector(".card-body");
var footerEl = document.querySelector(".card-footer");
var enterButton = document.createElement("button");

//Start button appear and styling
var startBtn = document.createElement("button")
document.body.appendChild(startBtn);
startBtn.setAttribute("style", "display: block; height: 60px; width: 80px; margin: auto");
startBtn.innerHTML = "Start!" ;
startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", render);

var secondsLeft = 75;
var answer = "";
var score = 0;
var total = 0;
var incorrect = 0;

//Questions go here
var questions = [
    {title: "Question One: Blah blah blah blah ",choices: ["Wrong 1","Wrong 2","Right","Wrong 3"], answer: "right"},
    {title: "Question Two: Blah blah blah blah ",choices: ["Wrong 1","Wrong 2","Right","Wrong 3"], answer: "right"},
    {title: "Question Three: Blah blah blah blah ",choices: ["Wrong 1","Wrong 2","Right","Wrong 3"], answer: "right"},
    {title: "Question Four: Blah blah blah blah ",choices: ["Wrong 1","Wrong 2","Right","Wrong 3"], answer: "right"},
];


//countdown timer function
function countdown() {
    startBtn.style.display = 'none'; 
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " remaining.";
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        scoreScreen();
      }
  
    }, 1000);
}


var count = 0 ;
function render(event) {
    event.preventDefault();

    // var questionEl = document.querySelector(".card-header");
    // var answerEl = document.querySelector(".card-body");
    // var footerEl = document.querySelector(".card-footer");
    
    //show the card which was hidden by CSS
    cardEl.setAttribute("Style" , "display: block");

        questionEl.textContent = questions[count].title;
        footerEl.textContent = "Select your answer.";
        
        //listing out answers

        for ( let i = 0 ; i < questions[1].choices.length ; i ++) {
                answer = (questions[1].choices[i]);
                // var selectButton = document.createElement("button");
                // selectButton.textContent = "Select";
                var li = document.createElement("li");
                li.textContent = answer;
                answerEl.appendChild(li);
                // li.appendChild(selectButton);
                
        }

        li.addEventListener("click", function(event){
            event.preventDefault();

            console.log("clicked")

            if (this.textContent === "right"){
                count++;

            }else{
                secondsLeft = secondsLeft - 10;
                count++;
            }

            
        });

    

}
       
//Score screen and inital log of that user's score

function scoreScreen() {
    timerEl.textContent = "Finished!";
    answerEl.style.display = 'none';
    questionEl.textContent = "Thank you for trying the game!";
    
    footerEl.textContent = "Enter your initials!";
    var input = document.createElement("input")
    footerEl.appendChild(input);
    
    enterButton.textContent = "Enter";
    footerEl.appendChild(enterButton);



    //need a box, score display, user input box locked to 3 char if possible, a submit button, and then store in local storage array, to be used on a high score screen, with a clear button, and a return/go back button.
  
}

enterButton.addEventListener("click", function(event){
    event.preventDefault();

    var initials = localStorage.getItem("initials");
    localStorage.setItem("initials", (JSON.stringify(initials)));


});



