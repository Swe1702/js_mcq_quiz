// declaring elements using DOM methods
var startButton = document.getElementById('start');
var questionContainer = document.getElementById('questions');
var choiceButtons = document.getElementById('choices');
var timerElement = document.getElementById('time');
var endScreen = document.getElementById('end-screen');
var finalScoreElement = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitButton = document.getElementById('submit');
var feedbackElement = document.getElementById('feedback');
var highScoresLink = document.querySelector('.scores a');
var startScreen = document.getElementById('start-screen');
// Timer and score variables
let currentQuestionIndex = 0;
let time = 60;
let score = 0;
let timer;
// Function to start the quiz
function startQuiz() {
  // hide the start screen
  startScreen.style.display = 'none';
  //hides the start button
  startButton.classList.add('hide');
  // display the questions and answer choices
  questionContainer.style.display = 'block';

}
// Function to update the timer
// Updates timer element by decrementing time variable
function updateTimer() {
  time--; // Decrement time variable
  timerElement.textContent = time; // Update timer element text content with decremented time
  if (time <= 0) { // Check if time has reached zero or negative value
     endQuiz(); // If true, end the quiz
  }
 }
