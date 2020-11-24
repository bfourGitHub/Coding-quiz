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
    title: "Who is the most awarded solo artist in American Music Awards history?",
    choices: ["Michael Jackson", "Taylor Swift", "Adele", "Garth Brooks"],
    answer: "Taylor Swift"
  },
  {
    title: "Declare the variable 'taylorSwiftAmaWins' and give it the value equal to the number of AMAs Taylor Swift currently holds.",
    choices: ['var Taylor-Swift-32 = taylorSwiftAmaWins', 'taylorSwiftAmaWins = 23amas', 'var taylorSwiftAmaWins = 32;', 'var = taylorSwiftAmaWins(32)'],
    answer: 'var taylorSwiftAmaWins = 32;'
  },
  {
    title: "There are many iconic red carpet looks. Arguably, one of the most iconic was worn by Britney Spears and Justin Timberlake to the 2001 AMAs. What did they wear?",
    choices: ["All white, with pearls.", "Matching denim-on-denim", "Matching black and white pant-suits", "Black lace and leather"],
    answer: "Matching denim-on-denim"
  },
  {
    title: "Aerosmith performed at the 2001 Super Bowl Halftime Show with all of the following artists EXCEPT which one?",
    choices: ["Britney Spears", "N'Sync", "Mary J Blige", "Missy Elliot"],
    answer: "Missy Elliot"
  },
  {
    title: "Which of the following artists won the Grammy Award for Best New Artist?",
    choices: ["Norah Jones", "Amy Winehouse", "Mariah Carey", "John Legend", "All of the Above"],
    answer: "All of the Above"
  },
  {
    title: "According to pop culture tradition, who/what decides when the Christmas season begins?",
    choices: ["Whenever coffee shops run out of pumpkin spice", "the date on the calendar", "Mariah Carey", "Lighting of the Rockefeller Center Xmas Tree"],
    answer: "Mariah Carey"
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
    timerEl.innerHTML = "You've completed the POP quiz!"
    highScoreInput();
  }
  else {

    
    var questionTitle = document.createElement("P")
    questionTitle.textContent = questions[questionIndex].title;
    
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
  mainEl.innerHTML = `<h3>Enter your Initials!</h3> <br> <input id= "userInitials"><br><button id= "saveUserInitials" onclick="saveUserInitials()">Save</button> <br> <h3>High Scores:</h3>`
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
  if (timeRemaining > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
    secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function () {
      
      timeRemaining--;
      timerEl.innerHTML = "Time Remaining: " + timeRemaining;

    }, 1000);
  };
  
};

//Add eventlistener for click
console.log(startButton);

startButton.addEventListener("click", function (e) {
  startCard.style.display = "none";
  startTimer();
  displayQuestions();
});

