//Declared Global Variables
var startButton = document.getElementById("startButton");
var startCard = document.getElementById("container-card");
var timerId;
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var questionIndex = 0;

//Quiz questions, choices and answers stored as an array of objects in the questions variable
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
//var timeRemaining = 5;
var rightAnswer = 0;
function displayQuestions() {
  // Creating an html elements <p> and <button> for each answer and checks
  if (questionIndex === questions.length) {
    console.log("quiz done");
    //clearInterval(interval);
    highScoreInput();
  }
  else {

    var questionTitle = document.createElement("P")
    questionTitle.textContent = questions[0].title;
    mainEl.append(questionTitle);
  
    var rightOrWrongDisplay = document.createElement("P");


  for (var i = 0; questions[questionIndex].choices[i]; i++) {
    //console.log(questions[questionIndex].choices[i]);
    var choiceButton = document.createElement("BUTTON");
    choiceButton.textContent = questions[questionIndex].choices[i];
    choiceButton.classList.add("answerButtons");
    mainEl.append(choiceButton);
    choiceButton.addEventListener("click", function (e) {
      console.log(questionIndex);
      //console.log(e.target.textContent);

      if (timeRemaining <= 0){
        //clearInterval(interval);
        console.log("Shawn Mendez")
        timerEl.innerHTML = "You're out of Time!"
        highScoreInput();
          
      }


      else if (e.target.textContent === questions[questionIndex].answer) {
        console.log("correct");
        rightOrWrongDisplay.textContent = "Correct";
        rightAnswer++
        mainEl.append(rightOrWrongDisplay);
        questionIndex++
        mainEl.innerHTML = "";
        displayQuestions();
      }
      else {
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
  }
};

function highScoreInput () {
  mainEl.innerHTML = `<input id= "userInitials">  <button id= "saveUserInitials" onclick="saveUserInitials()">Save</button> <br> <h3>High Scores:</h3>`
  clearInterval(interval);
  
  
};

function saveUserInitials () {
  var user = document.getElementById("userInitials").value
  console.log("save button pressed", user);
  var saveToLocalSt = JSON.parse(localStorage.getItem("codeQuiz")) || [];
  saveToLocalSt.push({
    user: user,
    score: timeRemaining*rightAnswer
  })
  localStorage.setItem("codeQuiz", JSON.stringify(saveToLocalSt));
  var tempUserDetails = ""
  for (let i= 0; i<saveToLocalSt.length; i++) {
      tempUserDetails+= `<p>${saveToLocalSt[i].user} : ${saveToLocalSt[i].score}`
  }
  document.getElementById("highScoresPage").innerHTML=tempUserDetails
};


function startTimer() {
  //setTime();

  // We only want to start the timer if totalSeconds is > 0
  //if (timeRemaining > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
    secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function () {
      
      timeRemaining--;
      timerEl.innerHTML = "Time Remaining: " + timeRemaining;

    }, 1000);
  //};
  if (timeRemaining === 0){
    console.log("Taylor swift");
    
  };
};

// if (timeRemaining < 0) {
//   console.log("Taylor Swift");
// };
/* This function stops the setInterval() set in startTimer but does not
   reset the secondsElapsed variable and does not reset the time by calling "setTime()" */
// function pauseTimer() {
//   if (timeRemaining <= 0){
//     clearInterval(startTimer);
//     console.log("Britney Spears");
//   }
// };

/* This function stops the interval and also resets secondsElapsed
   and calls "setTime()" which effectively reset the timer
   to the input selections workMinutesInput.value and restMinutesInput.value */
// function stopTimer() {
//   secondsElapsed = 0;
//   setTime();

// }



//Add eventlistener for click
console.log(startButton);

startButton.addEventListener("click", function (e) {
  startCard.style.display = "none";
  startTimer();
  displayQuestions();
});

