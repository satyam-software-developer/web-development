// Get the references to the game elements
const ball = document.getElementById("ball");
const rod1 = document.getElementById("rod1");
const rod2 = document.getElementById("rod2");

// Define constant values for storing player names and scores
const storeName = "PPName";
const storeScore = "PPMaxScore";
const rod1Name = "Rod 1";
const rod2Name = "Rod 2";

// Initialize game variables
let score = 0,
  maxScore = 0,
  movement,
  rod,
  ballSpeedX = 2,
  ballSpeedY = 2,
  gameOn = false;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Check local storage for existing player data
(function initializeGame() {
  rod = localStorage.getItem(storeName);
  maxScore = localStorage.getItem(storeScore);

  if (rod === null || maxScore === null) {
    alert("This is the first time you are playing this game. LET'S START");
    maxScore = 0;
    rod = rod1Name;
  } else {
    alert(`${rod} has maximum score of ${maxScore * 100}`);
  }

  resetBoard(rod);
})();

// Reset the game board based on the chosen player
function resetBoard(rodName) {
  rod1.style.left = `${(windowWidth - rod1.offsetWidth) / 2}px`;
  rod2.style.left = `${(windowWidth - rod2.offsetWidth) / 2}px`;
  ball.style.left = `${(windowWidth - ball.offsetWidth) / 2}px`;

  // Losing player gets the ball
  if (rodName === rod2Name) {
    ball.style.top = `${rod1.offsetTop + rod1.offsetHeight}px`;
    ballSpeedY = 2;
  } else if (rodName === rod1Name) {
    ball.style.top = `${rod2.offsetTop - rod2.offsetHeight}px`;
    ballSpeedY = -2;
  }

  score = 0;
  gameOn = false;
}

// Store the winning player's data
function storeWin(rod, score) {
  if (score > maxScore) {
    maxScore = score;
    localStorage.setItem(storeName, rod);
    localStorage.setItem(storeScore, maxScore);
  }

  clearInterval(movement);
  resetBoard(rod);

  alert(`${rod} wins with a score of ${score * 100}. Max score is: ${maxScore * 100}`);
}

// Set up event listener for keypress and game initialization
window.addEventListener("keypress", function (event) {
  const rodSpeed = 20;
  const rodRect = rod1.getBoundingClientRect();

  if (event.code === "KeyD" && rodRect.x + rodRect.width < windowWidth) {
    rod1.style.left = `${rodRect.x + rodSpeed}px`;
    rod2.style.left = rod1.style.left;
  } else if (event.code === "KeyA" && rodRect.x > 0) {
    rod1.style.left = `${rodRect.x - rodSpeed}px`;
    rod2.style.left = rod1.style.left;
  }

  if (event.code === "Enter" && !gameOn) {
    gameOn = true;
    startGame();
  }
});

// Start the game
function startGame() {
  const ballRect = ball.getBoundingClientRect();
  let ballX = ballRect.x;
  let ballY = ballRect.y;
  const ballDia = ballRect.width;

  const rod1Height = rod1.offsetHeight;
  const rod2Height = rod2.offsetHeight;
  const rod1Width = rod1.offsetWidth;
  const rod2Width = rod2.offsetWidth;

  movement = setInterval(function () {
    // Move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    const rod1X = rod1.getBoundingClientRect().x;
    const rod2X = rod2.getBoundingClientRect().x;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    if (ballX + ballDia > windowWidth || ballX < 0) {
      ballSpeedX = -ballSpeedX; // Reverses the direction of the ball
    }

    // It specifies the center of the ball on the viewport
    const ballPos = ballX + ballDia / 2;

    // Check for Rod 1
    if (ballY <= rod1Height) {
      ballSpeedY = -ballSpeedY; // Reverses the direction
      score++;

      // Check if the game ends
      if (ballPos < rod1X || ballPos > rod1X + rod1Width) {
        storeWin(rod2Name, score);
      }

      // Check for Rod 2
    } else if (ballY + ballDia >= windowHeight - rod2Height) {
      ballSpeedY = -ballSpeedY; // Reverses the direction
      score++;

      // Check if the game ends
      if (ballPos < rod2X || ballPos > rod2X + rod2Width) {
        storeWin(rod1Name, score);
      }
    }
  }, 10);
}