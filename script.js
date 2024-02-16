// function play(){
//     // Step 1: Hide the home screen by adding the calls "hidden" in the home section class
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // Step 2: Show the play ground screen by removing the "hidden" value from the class
//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden');

// }

/* Now create a function to continue the game */
function continueGame() {
  // Step 1: Crate random alphabet by using random method here we will use a call back function.
  const alphabet = getRandomAlphabetById();
  // Step 2: Shoe the random alphabet to the screen
  const displayRandomAlphabet = document.getElementById("current-alphabet");
  displayRandomAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  /* Hide The home screen by their id */
  hideElementById("home-screen");
  hideElementById("score-board");
  /* Show the play ground screen by their id */
  showElementById("play-ground");

  /* reset game */
  setValueById("life", 3);
  setValueById("score", 0);

  /* Call the function "continue game" to continue game */
  continueGame();
}

// Captured keyboard press
function handleUserPress(event) {
  const userPress = event.key;
  if (userPress === "Escape") {
    gameOver();
  }
  const expectedPress = document.getElementById("current-alphabet");
  const currentAlphabet = expectedPress.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(expectedAlphabet);
  // use condition to match with the user press also remove the bg of key

  if (userPress === expectedAlphabet) {
    // Option 1:
    // Update Score by function call
    const currentScore = getTextElementById("score");
    const updateScore = currentScore + 1;
    setValueById("score", updateScore);

    // Option 2: normal flow
    // const currentScoreElement = document.getElementById('score');
    // const scoreText = currentScoreElement.innerText;
    // const scoreNumber = parseInt(scoreText)
    // const newScore = scoreNumber + 1;
    // currentScoreElement.innerText = newScore;

    // Continue Game
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // Option 1: Using Function
    const currentLife = getTextElementById("life");
    const updateLife = currentLife - 1;
    setValueById("life", updateLife);

    /* Set Condition Game Over */
    if (updateLife === 0) {
      gameOver();
    }

    // Option 2: using normal flow
    // Step 1: Get the current life number
    // const currentLifeElement = document.getElementById('life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLifeNumber = parseInt(currentLifeText)
    // const newLifeNumber = currentLifeNumber -1;
    // currentLifeElement.innerText = newLifeNumber;
    // const newLifeScore = currentLifeNumber - 1;
    // currentAlphabet.innerText = newLifeScore;

    // Step 2: Decrass the life number

    // Step 3: Show the life number
  }

  console.log(userPress, expectedAlphabet);
}
document.addEventListener("keyup", handleUserPress);

/* Game Over Script */
function gameOver() {
  /* Hide The home screen by their id */
  hideElementById("play-ground");
  /* Show the play ground screen by their id */
  showElementById("score-board");

  //  setValueById("final-score", finalScore);
  const lastScore = getTextElementById("score");
  setValueById("final-score", lastScore);
  const lastAlphabet = getTextValueById("current-alphabet");
  removeBackgroundColorById(lastAlphabet);
}
