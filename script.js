var startButton = document.getElementById("startButton");
var startCard = document.getElementById("container-card");
var timerId;
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var questionIndex = 0;

var questions = [
  {
      title: "What is the HTML tag under which one can write the JavaScript code?",
      choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
      answer: "<script>"
  },
  {
      title: "What is the correct syntax for referring to an external script called 'script.js'?",
      choices: ['<script src="script.js">', '<script href="script.js">', '<script ref="script.js">', '<script name="script.js">'],
      answer: '<script src="script.js">'
  },
  {
      title: "How do you create a function in JavaScript?",
      choices: ["function = myFunction()", "function:myFunction", "function myFunction()", "Int Main(args)"],
      answer: "function myFunction()"
  },
  {
      title: "How to write an IF statement in JavaScript?",
      choices: ["if (i==5)", "if i=5 then", "if i = 5", "if i == 5 then"],
      answer: "if (i==5)"
  },
  {
      title: "How do you call a function named 'myFunction'?",
      choices: ["call myFunction()", "call function myFunction()", "myFunction()", "void 'myFunction()' "],
      answer: "myFunction()"
  }
];


var timeRemaining = questions.length * 15;

function displayQuestions() {
  // Creating an html elements <p> and <button> for each answer and checks
if (questionIndex === questions.length) {
console.log("quiz done");

}
var questionTitle = document.createElement("P")
questionTitle.textContent = questions[0].title;
mainEl.append(questionTitle);
var rightOrWrongDisplay= document.createElement("P");

for (var i = 0; questions[questionIndex].choices[i];i++) {
  //console.log(questions[questionIndex].choices[i]);
  var choiceButton = document.createElement("BUTTON");
  choiceButton.textContent = questions[questionIndex].choices[i];
  choiceButton.classList.add("answerButtons");
  mainEl.append(choiceButton);
  choiceButton.addEventListener("click", function(e){
    console.log(questionIndex);
    //console.log(e.target.textContent);
    if (e.target.textContent === questions[questionIndex].answer){
      console.log("correct");
      rightOrWrongDisplay.textContent = "Correct";
      mainEl.append(rightOrWrongDisplay);
      questionIndex++
      mainEl.innerHTML = "";
      displayQuestions();
    }
    else{
      console.log("wrong");
      timeRemaining -= 15;
      rightOrWrongDisplay.textContent = "Wrong";
      mainEl.append(rightOrWrongDisplay);
      questionIndex++
      mainEl.innerHTML = "";
      displayQuestions();
    }
  });

}

};




//Alert when user arrives to page: Gives explanation of how to use the quiz

//alert("Hello! When you click start your time will begin for the quiz! Note: Incorrect answers deduct 10 seconds from the time remaining! Good Luck! You got this!");

//Countdown clock, Displaying starting time and time remaining, updates as the questions are answered correctly or Incorrectly
//setInterval when the quiz begins(clicking start)



function startTimer() {
  //setTime();
  
  // We only want to start the timer if totalSeconds is > 0
  if (timeRemaining > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
    secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function() {
      timeRemaining--;
      timerEl.innerHTML = timeRemaining;
      
      // So renderTime() is called here once every second.
      
      
        }, 1000);
    } else {
      alert("Minutes of work/rest must be greater than 0.")
    }
  }
  
  /* This function stops the setInterval() set in startTimer but does not
     reset the secondsElapsed variable and does not reset the time by calling "setTime()" */
  function pauseTimer() {
    clearInterval(interval);
    
  }
  
  /* This function stops the interval and also resets secondsElapsed
     and calls "setTime()" which effectively reset the timer
     to the input selections workMinutesInput.value and restMinutesInput.value */
  function stopTimer() {
    secondsElapsed = 0;
    setTime();
    
  }




//FUNCTION required to do the following:
//IF the answer is incorrect ALERT? AND Subtract Time AND go to the next question
//Click event listener for the user selection: selectedAnswerQ1, selectedAnswerQ2 etc
//addEventListener(click);


//For every incorrect answer time is subtracted from the clock
//The game is over when all the questions are answered or when the time reaches 0 
//Clear interval
//Save initials for high scores

//GIVEN I am taking a code quiz


//Add eventlistener for click
console.log(startButton);

startButton.addEventListener("click" , function(e){
  startCard.style.display="none";
  startTimer();
  displayQuestions();
});

