// VARIABLES
let sequence = []; // light sequence monitor
let playersequence = []; // selected sequence monitor
let light; // integer for number of lights displayed in game
let attempt; // user attempt tracker
let success; // boolean true/false to monitor user success rate of correct/incorrect choices
let cpuTry; // boolean true/false to track who's attempt, i.e. cpu or user
let intervalId; // execution and pause duration time signifier
let strict = false; // strictmode activity status monitor/always starts false to represent unchecked
let sound = true; // sound activity monitor/starts true to represent sounds active when game is activated
let on = false; // game activation monitor/starts false to signify deactivated
let win; // will say if user has won the game

let sound1 = new Audio("assets/sounds/btnGreen.mp3"); // btnGreen Sound
let sound2 = new Audio("assets/sounds/btnRed.mp3"); // btnRed Sound
let sound3 = new Audio("assets/sounds/btnYellow.mp3"); // btnYellow Sound
let sound4 = new Audio("assets/sounds/btnBlue.mp3"); // btnBlue Sound
let sound5 = new Audio("assets/sounds/soundOn.mp3"); // SoundOn
let sound6 = new Audio("assets/sounds/soundOff.mp3"); // SoundOff
let sound7 = new Audio("assets/sounds/soundCorrect.mp3"); // soundCorrect
let sound8 = new Audio("assets/sounds/soundIncorrect.mp3"); // soundIncorrect
let sound9 = new Audio("assets/sounds/soundHalfwaypoint.mp3"); // soundHalfwaypoint
let sound10 = new Audio("assets/sounds/soundWingame.mp3"); // soundWingame

// VARIABLES - DOM QUERIES
const btnGame = document.querySelectorAll(".btnGame");
const scoreTracker = document.querySelector("#attempt"); // non-interactive Element

const btnGreen = document.getElementById("btnGreen"); // interactive Element
const btnRed = document.getElementById("btnRed"); // interactive Element
const btnYellow = document.getElementById("btnYellow"); // interactive Element
const btnBlue = document.getElementById("btnBlue"); // interactive Element

const btnStrict = document.querySelector("#strict"); // interactive Element
const btnOn = document.getElementById("on"); // interactive Element
const btnStart = document.getElementById("start"); // interactive Element

// EVENT LISTENERS
btnOn.addEventListener("change", event => {
  if (btnOn.checked == true) {
    on = true;
    scoreTracker.textContent = "-";
    sound5.play();
  } else {
    on = false;
    scoreTracker.textContent = "";
    sound6.play();
    clearColor();
    clearInterval(intervalId);
  }
});

btnStart.addEventListener("click", event => {
  if (on || win) {
    reset();
  }
});

btnStrict.addEventListener(
  "change",
  () => (strict = btnStrict.checked ? true : false)
);

window.addEventListener("keyup", event => {
  let key = parseInt(event.keyCode);
  let keyArray = [[80, 1], [76, 2], [65, 3], [89, 4]];
  console.log(key);
  for (let k in keyArray) {
    if (keyArray[k][0] == key) {
      addSequence(keyArray[k][1]);
      break;
    }
  }
});

window.addEventListener("click", event => console.log(event.target));

btnGame.forEach(btn =>
  btn.addEventListener("click", event => {
    console.log(event);
    // extract value from either div or parent div
    let value = parseInt(event.target.dataset.value);
    if (isNaN(value)) value = parseInt(event.target.parentNode.dataset.value);

    addSequence(value);
  })
);

function addSequence(value) {
  if (on) {
    playersequence.push(value);
    check();
    buttonEffect(value);
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
}

// FUNCTIONS - LOOP SEQUENCE
function reset() {
  win = false;
  sequence = [];
  playersequence = [];
  light = 0;
  intervalId = 0;
  attempt = 1;
  scoreTracker.textContent = 1;
  success = true;
  for (var i = 0; i < 20; i++) {
    // loop which generates a random sequence of numbers for the light 'sequence' array
    sequence.push(Math.floor(Math.random() * 4) + 1);
  }
  cpuTry = true;

  intervalId = setInterval(gameAttempt, 800); // game sequence lights will illuminate for a duration of eight hundred milliseconds repeat
}

// FUNCTION - INTERVALS AND COLOR RESET
function gameAttempt() {
  on = false;

  if (light == attempt) {
    clearInterval(intervalId); // if number in light sequence equals number in scoreTracker, cpu action stops and user and begin
    cpuTry = false;
    clearColor(); // resets button lights from illuminated back to neutral color
    on = true;
  }

  if (cpuTry) {
    clearColor();
    setTimeout(() => {
      buttonEffect(sequence[light]); // if first item in random light sequence array is '1' then the 'one' function will run
      light++;
    }, 200); // a duration of 200 milliseconds between each 800 millisecond setInterval
  }
}

function buttonEffect(value) {
  if (sound) {
    switch (value) {
      case 1:
        sound1.play();
        btnGreen.style.backgroundColor = "#29FF9E"; // Vivid cyan - lime green.
        break;
      case 2:
        sound2.play();
        btnRed.style.backgroundColor = "#E07070"; // Soft red
        break;
      case 3:
        sound3.play();
        btnYellow.style.backgroundColor = "#FAD362"; // Soft orange
        break;
      case 4:
        sound4.play();
        btnBlue.style.backgroundColor = "#66AFF8"; // Soft blue
        break;
      default:
        return false;
    }
  }
  sound = true;
}

// FUNCTION - COLOR STATES
function clearColor() {
  // buttons original state
  btnGreen.style.backgroundColor = "#00DB78"; // Pure (or mostly pure) cyan - lime green.
  btnRed.style.backgroundColor = "#D33131"; // Strong red
  btnYellow.style.backgroundColor = "#F7BF18"; // Vivid orange
  btnBlue.style.backgroundColor = "#1D89F4"; // Vivid blue
}

function illumColor() {
  // buttons illuminated state
  btnGreen.style.backgroundColor = "#29FF9E"; // vivid cyan - lime green
  btnRed.style.backgroundColor = "#E07070"; // soft red
  btnYellow.style.backgroundColor = "#FAD362"; // soft orange
  btnBlue.style.backgroundColor = "#66AFF8"; // soft blue
}

// FUNCTION - PLAYER SEQUENCE CHOICE VERIFICATION
function check() {
  if (
    playersequence[playersequence.length - 1] !==
    sequence[playersequence.length - 1]
  )
    success = false; // if playersequence does not equal players last selection then player is incorrect

  if (playersequence.length == 10 && success) {
    // if player sequence equals cpu given sequence of '10' player wins game
    setTimeout(() => {
      sound10.play();
    }, 400); // 400 millisencond interval before sound plays
    playerWin();
  }

  if (success == false) {
    illumColor(); // button color in illuminated state
    scoreTracker.textContent = "'Invalid Input Entered'"; // displays text within semi colons is user makes mistake
    sound8.play();
    setTimeout(() => {
      scoreTracker.textContent = attempt;
      clearColor(); // button color in neutral state

      if (strict) {
        reset(); // restarts game if user makes a mistake
      } else {
        success = true;
        sharedVariables();
      }
    }, 800);

    sound = false;
  }

  if (attempt == playersequence.length && success && !win) {
    // if user light & button choice aligns with that of cpu user moves onto next round
    attempt++;

    setTimeout(() => {
      sound7.play();
    }, 400);
    sharedVariables();
  }
}

// FUNCTION - SHARED VARIABLES
function sharedVariables() {
  // applied to multiple functions
  playersequence = [];
  cpuTry = true;
  light = 0;
  scoreTracker.textContent = attempt;
  intervalId = setInterval(gameAttempt, 800);
}

// FUNCTION - PLAYER WIN GAME TRIGGER
function playerWin() {
  illumColor();
  scoreTracker.textContent = "'Congratulations! You Win'"; // message displayed if user completes all sequences
  on = false; // game stops
  win = true;
}
