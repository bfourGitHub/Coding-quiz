var person = {
    name: 'bryan',
    age: 32

}

person.name = 'Silas';
person['name'] = 'Andy';

console.log(person.name);
console.log(person.age);

//Alert when user arrives to page: Gives explanation of how to use the quiz

alert("Hello! When you click start your time will begin for the quiz! Note: Incorrect answers deduct 10 seconds from the time remaining! Good Luck! You got this!");

//Countdown clock, Displaying starting time and time remaining, updates as the questions are answered correctly or Incorrectly
//setInterval when the quiz begins(clicking start)

function startTimer() {
    setTime();
  
    // We only want to start the timer if totalSeconds is > 0
    if (totalSeconds > 0) {
      /* The "interval" variable here using "setInterval()" begins the recurring increment of the
         secondsElapsed variable which is used to check if the time is up */
        interval = setInterval(function() {
          secondsElapsed++;
  
          // So renderTime() is called here once every second.
          renderTime();
        }, 1000);
    } else {
      alert("Minutes of work/rest must be greater than 0.")
    }
  }
  
  /* This function stops the setInterval() set in startTimer but does not
     reset the secondsElapsed variable and does not reset the time by calling "setTime()" */
  function pauseTimer() {
    clearInterval(interval);
    renderTime();
  }
  
  /* This function stops the interval and also resets secondsElapsed
     and calls "setTime()" which effectively reset the timer
     to the input selections workMinutesInput.value and restMinutesInput.value */
  function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
  }

//Variables we need:
//Variable for questions: questionOne, questionTwo etc
/*var questionOne = '';
var questionTwo = '';
var questionThree = '';
var questionFour = '';
var questionFive = '';
var questionSix = '';


//Variable for answers to questions: answerQuestionOneA, answerQuestionOneB etc
/*var answerQuestionOneA = true;
var answerQuestionOneB = false;
var answerQuestionOneC = false;

var answerQuestionTwoA = true;
var answerQuestionTwoB = false;
var answerQuestionTwoC = false;

var answerQuestionThreeA = true;
var answerQuestionThreeB = false;
var answerQuestionThreeC = false;

var answerQuestionFourA = true;
var answerQuestionFourB = false;
var answerQuestionFourC = false;

var answerQuestionFiveA = true;
var answerQuestionFiveB = false;
var answerQuestionFiveC = false;

var answerQuestionSixA = true;
var answerQuestionSixB = false;
var answerQuestionSixC = false;*/

//OR 

let questionOne = {
    questionAskedOne: '',
    answerOneA: true,
    answerOneB: false,
    answerOneC: false
};

let questionTwo = {
    questionAskedTwo: '',
    answerTwoA: true,
    answerTwoB: false,
    answerTwoC: false
};

let questionThree = {
    questionAskedThree: '',
    answerThreeA: true,
    answerThreeB: false,
    answerThreeC: false
};

let questionFour = {
    questionAskedFour: '',
    answerFourA: true,
    answerFourB: false,
    answerFourC: false
};

let questionFive = {
    questionAskedFive: '',
    answerFiveA: true,
    answerFiveB: false,
    answerFiveC: false
};

let questionSix = {
    questionAskedSix: '',
    answerSixA: true,
    answerSixB: false,
    answerSixC: false
};

//FUNCTION required to do the following:
//IF the answer is incorrect ALERT? AND Subtract Time AND go to the next question
//Click event listener for the user selection: selectedAnswerQ1, selectedAnswerQ2 etc
//addEventListener(click);
function selectedAnswerQ1() {
    console.log();
    if (selectedAnswerQ1 = true) {
        //ALERT 'Correct'
        //Move user to the next Question
    }

    else {
        //ALERT 'Incorrect'
        //SUBTRACT Time from countdown clock
        //Move user to next question
    };
}
//For every incorrect answer time is subtracted from the clock
//The game is over when all the questions are answered or when the time reaches 0 
//Clear interval
//Save initials for high scores

//GIVEN I am taking a code quiz
