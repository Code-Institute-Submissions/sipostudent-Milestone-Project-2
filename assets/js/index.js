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

// VARIABLES - DOM QUERIES
let sound1 = document.getElementById("sound1"); // btnGreen Sound
let sound2 = document.getElementById("sound2"); // btnRed Sound
let sound3 = document.getElementById("sound3"); // btnYellow Sound
let sound4 = document.getElementById("sound4"); // btnBlue Sound
let sound5 = document.getElementById("sound5"); // SoundOn
let sound6 = document.getElementById("sound6"); // SoundOff
let sound7 = document.getElementById("sound7"); // soundCorrect
let sound8 = document.getElementById("sound8"); // soundIncorrect
let sound9 = document.getElementById("sound9"); // soundHalfwaypoint
let sound10 = document.getElementById("sound10"); // soundWingame

// VARIABLES - CONSTANTS
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

btnStrict.addEventListener("change", event => {
    if (btnStrict.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

btnGreen.addEventListener("click", event => {
    if (on) {
        playersequence.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

btnRed.addEventListener("click", event => {
    if (on) {
        playersequence.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

btnYellow.addEventListener("click", event => {
    if (on) {
        playersequence.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

btnBlue.addEventListener("click", event => {
    if (on) {
        playersequence.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});