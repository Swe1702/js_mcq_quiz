// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve high scores from local storage or use an empty array if there are no high scores
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highscoresList = document.getElementById('highscores'); // Get the highscores list element from the DOM
  
    // Function to clear high scores
    function clearHighScores() {
      localStorage.removeItem('highScores'); // Clear high scores from local storage
      highscoresList.innerHTML = ''; // Clear the highscores list in the DOM
    }
  
    // Iterate through high scores and add them to the <ol> as list items
    highScores.forEach(score => {
      const listItem = document.createElement('li'); // Create a new list item element
      listItem.textContent = `${score.initials}: ${score.score}`; // Set the text content of the list item with initials and score
      highscoresList.appendChild(listItem); // Add the list item to the highscores list in the DOM
    });
  
    // Attach event listener to the "Clear Highscores" button
    const clearScoresButton = document.getElementById('clear-scores'); // Get the clear high scores button element from the DOM
    clearScoresButton.addEventListener('click', clearHighScores); // Add an event listener for clearing high scores when the button is clicked
  });