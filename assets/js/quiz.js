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
  timer = setInterval(updateTimer, 1000); // calling updateTimer function which excutes every 1000 milli seconds or every second.
  renderQuestion(); //calling renderQuestion function
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
// Function to render questions and choices
function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];//The current question object is obtained from the questions array using the currentQuestionIndex.
  document.getElementById('question-title').textContent = currentQuestion.question;//Inside the function, the current question object is obtained from the questions array using the currentQuestionIndex.
  choiceButtons.innerHTML = '';//The choiceButtons element's innerHTML is cleared to remove any previous choice buttons.
  currentQuestion.choices.forEach(choice => { //Next, a loop is run over the choices array of the current question object. In each iteration, a new button element is created and the current choice is set as the text content of the button.
    const button = document.createElement('button');
    button.textContent = choice; // the content in the choice is added to button.
    button.classList.add('choice'); //The class 'choice' is added to the button to apply styling.
    button.addEventListener('click', selectAnswer);//The class 'choice' is added to the button to apply styling.
    choiceButtons.appendChild(button);//The class 'choice' is added to the button to apply styling.
  });
}
// Function to handle answer selection
function selectAnswer(event) {
   const selectedButton = event.target; // stores the answer user gives
   const correct = selectedButton.textContent === questions[currentQuestionIndex].answer; //the correvt variable stores the answer we gave in the question.

  if (correct) { //if the answer is correct the score increases 10 times.
    score = score + 10; //score increases 10 times if the answer is correct.
    feedbackElement.textContent = 'Correct!'; // display correct
  } else {
    time = time - 10; //if the answer is wrong the time will be reduced 10 times.
    feedbackElement.textContent = 'Wrong!'; //displays wrong.
  }
  feedbackElement.classList.remove('hide'); //the above displayed answer will hide.
  setTimeout(() => { //this function runs for every 300 milli seconds
    feedbackElement.classList.add('hide');
  }, 300); 
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) { //if the question number is greater than the number of questions then this exits the function or else displays next question
    renderQuestion();
  } else {
    endQuiz();
  }
}
// Function to end the quiz
function endQuiz() {
  clearInterval(timer); //Stops the timer by clearing the interval
  questionContainer.classList.add('hide'); //Adds the class 'hide' to the question container. This hides the current question from view by using the CSS rule .hide { display: none; }.
  endScreen.classList.remove('hide'); //hides the end screen
  finalScoreElement.textContent = score; // Updates the user interface by showing the user's final score, their answers to the quiz questions, and a link to start the quiz over.
}