// Project 1: Counter
let count = 0;

function increaseCount() {
    count++;
    document.querySelector('#counter-thingy').textContent = count;
}

function decreaseCount() {
    count--;
    document.querySelector('#counter-thingy').textContent = count;
}

document.querySelector('#increaseBtn').addEventListener('click', increaseCount);
document.querySelector('#decreaseBtn').addEventListener('click', decreaseCount);

// Project 2: Random Number Generator
function generateRandomNumber() {
    let num1 = Number(document.querySelector('#randomNumGen-num1').value);
    let num2 = Number(document.querySelector('#randomNumGen-num2').value);
    let range = (num2 - num1) + 1;

    let randomNum = Math.floor(Math.random() * range) + num1;

    document.querySelector('#generated-number').textContent = randomNum;
}

document.querySelector('#generateBtn').addEventListener('click', generateRandomNumber);

function resetRandomNumber() {
    document.querySelector('#randomNumGen-num1').value = null;
    document.querySelector('#randomNumGen-num2').value = null;

    document.querySelector('#generated-number').textContent = '0';
}

document.querySelector('#resetBtn').addEventListener('click', resetRandomNumber);

// Project 3: Animated Button
let buttonPressed = false;

function buttonChange() {
    if (buttonPressed === false) {
        document.querySelector('#animatedBtn').src = "../../../animatedButton2.png";
        buttonPressed = true;
    } else {
        document.querySelector('#animatedBtn').src = "../../../animatedButton1.png";
        buttonPressed = false;
    }
}

document.querySelector('#animatedBtn').addEventListener('mousedown', buttonChange);
document.querySelector('#animatedBtn').addEventListener('mouseup', buttonChange);

// Project 4: To-do List
let testArray = [];
let i = 0;

function addToDoItem() {
    let newItem = document.querySelector('#todo-item').value;
    let pItem = document.createElement('p');

    if (newItem != '') { // '' detects if input is empty, as null and undefined don't work in this case
        i += 58;

        pItem.setAttribute('class', 'todo-list-items');
        pItem.setAttribute('id', 'todo-list-id');

        pItem.textContent = newItem;
        testArray.push(newItem);

        document.querySelector('#actual-list-container').appendChild(pItem);

        document.querySelector('#todo-item').value = null;
    }
}

function removeAllItems() {
    for (i = 0; i < testArray.length; i++) {
        document.querySelector('#todo-list-id').remove();
    }

    testArray = [];
}

document.querySelector('#todoAddBtn').addEventListener('click', addToDoItem);
document.querySelector('#removeAllItemsBtn').addEventListener('click', removeAllItems);

// Project 5: Easy Calculator

function calculateResult() {
    let firstInput = Number(document.getElementById('input-id-one').value);
    let secondInput = Number(document.getElementById('input-id-two').value);

    let operator = document.getElementById('operator-select').value;
    let result = eval(firstInput + operator + secondInput); // some websites suggest that eval isn't always super safe

    document.getElementById("easy-calculator-span").textContent = result;
}

document.getElementById("equal-btn").addEventListener('click', calculateResult);

// Project 6: My First Game...?

let hp = 100;

function increaseHealth() {
    if (hp < 100) {
        hp += 5;
        document.getElementById("health-bar-id").style.width = hp * 2 + "px";
        if (hp <= 30) {
            document.getElementById('health-bar-id').style.backgroundColor = "red";
        }
        if (hp <= 50 && hp > 30) {
            document.getElementById('health-bar-id').style.backgroundColor = "yellow";
        }
        if (hp > 50) {
            document.getElementById('health-bar-id').style.backgroundColor = "green";
        }
    }
    if (hp > 0 && mhp > 0) {
        document.getElementById("living-status").textContent = "You're currently alive.";
    }
}

function decreaseHealth() {
    if (hp > 0) {
        hp -= 5;
        document.getElementById("health-bar-id").style.width = hp * 2 + "px";
        if (hp <= 30) {
            document.getElementById('health-bar-id').style.backgroundColor = "red";
        }
        if (hp <= 50 && hp > 30) {
            document.getElementById('health-bar-id').style.backgroundColor = "yellow";
        }
        if (hp > 50) {
            document.getElementById('health-bar-id').style.backgroundColor = "green";
        }
    }
    if (hp === 0) {
        document.getElementById("living-status").textContent = "You died from eating those salty little demons";
    }
}

let mhp = 100;

function increaseMentalHealth() {
    if (mhp < 100) {
        mhp += 5;
        document.getElementById("mental-health-bar-id").style.width = mhp * 2 + "px";
        if (mhp <= 30) {
            document.getElementById('mental-health-bar-id').style.backgroundColor = "red";
        }
        if (mhp <= 50 && mhp > 30) {
            document.getElementById('mental-health-bar-id').style.backgroundColor = "yellow";
        }
        if (mhp > 50) {
            document.getElementById('mental-health-bar-id').style.backgroundColor = "green";
        }
    }
    if (mhp > 0 && hp > 0) {
        document.getElementById("living-status").textContent = "You're currently alive.";
    }
}

function decreaseMentalHealth() {
    if (mhp > 0) {
        mhp -= 5;
        document.getElementById("mental-health-bar-id").style.width = mhp * 2 + "px";
        if (mhp <= 30) {
            document.getElementById('mental-health-bar-id').style.backgroundColor = "red";
        }
        if (mhp <= 50 && mhp > 30) {
            document.getElementById('mental-health-bar-id').style.backgroundColor = "yellow";
        }
        if (mhp > 50) {
            document.getElementById('mental-health-bar-id').style.backgroundColor = "green";
        }
    }
    if (mhp === 0) {
        document.getElementById("living-status").textContent = "You gave up in life.";
    }
}

document.querySelector("#btn-increase-id").addEventListener('click', increaseHealth);
document.querySelector("#btn-decrease-id").addEventListener('click', decreaseHealth);

document.querySelector("#btn-increase-id2").addEventListener('click', increaseMentalHealth);
document.querySelector("#btn-decrease-id2").addEventListener('click', decreaseMentalHealth);

// Project 7: Tic Tac Toe

let donePlaying = false;
let currentPlayer = "x";
let filledGridSpots = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };

function place(gridPart) {
    if (donePlaying === false) {
        if (currentPlayer === 'x' && filledGridSpots[gridPart] === '') {
            document.getElementById("grid-" + gridPart).textContent = currentPlayer;
            filledGridSpots[gridPart] = 'x';
            currentPlayer = 'o';
            document.getElementById("turn-status").textContent = "It's O's turn.";
        } else if (currentPlayer === 'o' && filledGridSpots[gridPart] === '') {
            document.getElementById("grid-" + gridPart).textContent = currentPlayer;
            filledGridSpots[gridPart] = 'o';
            currentPlayer = "x";
            document.getElementById("turn-status").textContent = "It's X's turn.";
        }
        determineWinner();
    }
}

function determineWinner() {
    if ((filledGridSpots['1'] === 'x' && filledGridSpots['2'] === 'x' && filledGridSpots['3'] === 'x') || (filledGridSpots['4'] === 'x' && filledGridSpots['5'] === 'x' && filledGridSpots['6'] === 'x') || (filledGridSpots['7'] === 'x' && filledGridSpots['8'] === 'x' && filledGridSpots['9'] === 'x') || (filledGridSpots['1'] === 'x' && filledGridSpots['4'] === 'x' && filledGridSpots['7'] === 'x') || (filledGridSpots['2'] === 'x' && filledGridSpots['5'] === 'x' && filledGridSpots['8'] === 'x') || (filledGridSpots['3'] === 'x' && filledGridSpots['6'] === 'x' && filledGridSpots['9'] === 'x') || (filledGridSpots['1'] === 'x' && filledGridSpots['5'] === 'x' && filledGridSpots['9'] === 'x') || (filledGridSpots['3'] === 'x' && filledGridSpots['5'] === 'x' && filledGridSpots['7'] === 'x')) {
        document.getElementById("turn-status").textContent = "X Wins!";
        donePlaying = true;
    } else if ((filledGridSpots['1'] === 'o' && filledGridSpots['2'] === 'o' && filledGridSpots['3'] === 'o') || (filledGridSpots['4'] === 'o' && filledGridSpots['5'] === 'o' && filledGridSpots['6'] === 'o') || (filledGridSpots['7'] === 'o' && filledGridSpots['8'] === 'o' && filledGridSpots['9'] === 'o') || (filledGridSpots['1'] === 'o' && filledGridSpots['4'] === 'o' && filledGridSpots['7'] === 'o') || (filledGridSpots['2'] === 'o' && filledGridSpots['5'] === 'o' && filledGridSpots['8'] === 'o') || (filledGridSpots['3'] === 'o' && filledGridSpots['6'] === 'o' && filledGridSpots['9'] === 'o') || (filledGridSpots['1'] === 'o' && filledGridSpots['5'] === 'o' && filledGridSpots['9'] === 'o') || (filledGridSpots['3'] === 'o' && filledGridSpots['5'] === 'o' && filledGridSpots['7'] === 'o')) {
        document.getElementById("turn-status").textContent = "O Wins!";
        donePlaying = true;
    } else if (filledGridSpots['1'] !== '' && filledGridSpots['2'] !== '' && filledGridSpots['3'] !== '' && filledGridSpots['4'] !== '' && filledGridSpots['5'] !== '' && filledGridSpots['6'] !== '' && filledGridSpots['7'] !== '' && filledGridSpots['8'] !== '' && filledGridSpots['9'] !== '') {
        document.getElementById("turn-status").textContent = "It's a draw!";
        donePlaying = true;
    }
}

function resetTTT() {
    filledGridSpots = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    donePlaying = false;
    document.getElementById('turn-status').textContent = "It's " + currentPlayer.toUpperCase() + "'s turn."
    for (i = 1; i < 10; i++) {
        document.querySelector('#grid-' + i).textContent = '';
    }
}

document.querySelector('#reset-ttt-id').addEventListener('click', resetTTT);

// Project 8: Balloon Game

let balloonsPopped = 0;
let difficulty = 0;

document.getElementById("difficulty").textContent = 'Difficulty: 0';

function popBalloon(balloonNumber) {
    document.getElementById('balloon-game').style.fontSize = "150%";

    let balloonToPop = document.getElementById('balloon-number-' + balloonNumber);
    balloonToPop.textContent = "POP!";
    balloonToPop.style.backgroundColor = "white";

    if (balloonsPopped === difficulty * 10 + 29) {
        allBalloonsPopped();
    }
}

function hidePop(balloonNumberAgain) {
    if (balloonsPopped === difficulty * 10 + 29) {
        return;
    }
    document.getElementById('balloon-number-' + balloonNumberAgain).textContent = '';
}

function allBalloonsPopped() {
    for (i = 0; i < difficulty * 10 + 30; i++) {
        document.querySelector('.balloon').remove();
    }

    let message = document.createElement('h3');
    let playAgainBtn = document.createElement('button');
    message.setAttribute('id', 'balloon-message');
    playAgainBtn.setAttribute('class', 'btn-blue');
    playAgainBtn.setAttribute('id', 'play-again-btn');
    playAgainBtn.onclick = function () { playBalloonGameAgain() };

    document.getElementById('balloon-game').style.height = "345px";
    document.getElementById('balloon-game').appendChild(message).textContent = 'Congrats! You popped all of the balloons!';
    document.getElementById('balloon-game').appendChild(playAgainBtn).textContent = 'Play Again';
}

function playBalloonGameAgain() {
    document.getElementById('balloon-message').remove();
    document.getElementById('play-again-btn').remove();

    balloonsPopped = 0;
    difficulty++;

    document.getElementById('difficulty').textContent = "Difficulty: " + difficulty;

    for (i = 0; i < difficulty * 10 + 30; i++) {
        let balloon = document.createElement('div');
        let randomColor = Math.floor(Math.random() * 4);
        let colors = { 0: "red", 1: "yellow", 2: "green", 3: "blue" };

        document.getElementById('balloon-game').style.height = "345px";
        balloon.setAttribute('class', 'balloon');
        balloon.setAttribute('id', 'balloon-number-' + i);
        balloon.style.backgroundColor = colors[randomColor];
        document.getElementById('balloon-game').appendChild(balloon);
    }

    document.getElementById('balloon-game').style.height = difficulty * 105 + 345 + "px";

    for (i = 0; i < difficulty * 10 + 30; i++) {
        let balloonNumberRecord = i;
        document.getElementById('balloon-number-' + i).addEventListener('mouseover', function testFunction() {
            popBalloon(balloonNumberRecord);
            if (balloonsPopped === difficulty * 10 + 29) {
                return;
            }
            setTimeout(function () {
                hidePop(balloonNumberRecord);
            }, 2000);
            balloonsPopped++;
            document.getElementById('balloon-number-' + balloonNumberRecord).removeEventListener('mouseover', testFunction);
        });
    }
}

for (i = 0; i < 30; i++) {
    let balloon = document.createElement('div');
    let randomColor = Math.floor(Math.random() * 4);
    let colors = { 0: "red", 1: "yellow", 2: "green", 3: "blue" };

    document.getElementById('balloon-game').style.height = "345px";
    balloon.setAttribute('class', 'balloon');
    balloon.setAttribute('id', 'balloon-number-' + i);
    balloon.style.backgroundColor = colors[randomColor];
    document.getElementById('balloon-game').appendChild(balloon);
}

for (i = 0; i < 30; i++) {
    let balloonNumberRecord = i;
    document.getElementById('balloon-number-' + i).addEventListener('mouseover', function testFunction() {
        popBalloon(balloonNumberRecord);
        if (balloonsPopped === 29) {
            return;
        }
        setTimeout(function () {
            hidePop(balloonNumberRecord);
        }, 2000);
        balloonsPopped++;
        document.getElementById('balloon-number-' + balloonNumberRecord).removeEventListener('mouseover', testFunction);
    });
}

// Project 9: Geometry Game

let randomShapeNumber = Math.floor(Math.random() * 6);
let shapes = {
    0: 'square',
    1: 'rectangle',
    2: 'triangle',
    3: 'hexagon',
    4: 'octagon',
    5: 'circle'
};
let chosenShape = shapes[randomShapeNumber];
let randomLength = Math.floor(Math.random() * 6 + 1);
let secondRandomLength = Math.floor(Math.random() * 8 + 1);
let shapeImage = document.createElement('div');
shapeImage.setAttribute('class', chosenShape);
shapeImage.setAttribute('id', 'shape-image-id');
let geometryGameAnswer;
let numCorrect = 0;
let numIncorrect = 0;

document.getElementById('geometry-game-status').textContent = "Shape: " + chosenShape;
document.getElementById('geometry-game').appendChild(shapeImage);
determineAnswer();

function determineAnswer() {
    if (chosenShape === 'square') {
        document.getElementById('base-side-radius').textContent = "width = " + randomLength + " cm";
        geometryGameAnswer = randomLength * randomLength;
    } else if (chosenShape === 'rectangle') {
        document.getElementById('base-side-radius').textContent = "width = " + secondRandomLength + " cm height = " + randomLength + " cm";
        geometryGameAnswer = secondRandomLength * randomLength;
    } else if (chosenShape === 'triangle') {
        document.getElementById('base-side-radius').textContent = "width = " + secondRandomLength + " cm height = " + randomLength + " cm";
        geometryGameAnswer = secondRandomLength * randomLength / 2;
    } else if (chosenShape === 'hexagon') {
        document.getElementById('base-side-radius').textContent = "a = " + randomLength + " cm";
        geometryGameAnswer = randomLength * randomLength * 2.598;
    } else if (chosenShape === 'octagon') {
        document.getElementById('base-side-radius').textContent = "a = " + randomLength + " cm";
        geometryGameAnswer = randomLength * randomLength * 4.828;
    } else if (chosenShape === 'circle') {
        document.getElementById('base-side-radius').textContent = "r = " + randomLength + " cm";
        geometryGameAnswer = randomLength * randomLength * 3.141;
    }
}

function determineIfAnswerCorrect() {
    let playersAnswer = document.getElementById('geometry-input').value;
    if (playersAnswer == geometryGameAnswer) {
        document.getElementById('geometry-game-status').textContent = "You are correct";
        setTimeout(resetGeometryGame, 1000);
        numCorrect++;
        document.getElementById('geometry-num-correct').textContent = numCorrect;
    } else {
        document.getElementById('geometry-game-status').textContent = "You are incorrect";
        setTimeout(resetGeometryGame, 1000);
        numIncorrect++;
        document.getElementById('geometry-num-incorrect').textContent = numIncorrect;
    }
}

function resetGeometryGame() {
    randomShapeNumber = Math.floor(Math.random() * 6);
    shapes = {
        0: 'square',
        1: 'rectangle',
        2: 'triangle',
        3: 'hexagon',
        4: 'octagon',
        5: 'circle'
    };
    chosenShape = shapes[randomShapeNumber];
    randomLength = Math.floor(Math.random() * 6 + 1);
    secondRandomLength = Math.floor(Math.random() * 8 + 1);
    shapeImage.setAttribute('class', chosenShape);

    determineAnswer();

    document.getElementById('geometry-game-status').textContent = "Shape: " + chosenShape;
    document.getElementById('shape-image-id').remove();
    document.getElementById('geometry-game').appendChild(shapeImage);
    document.getElementById('geometry-input').value = null;
}

document.getElementById('geometry-answer-btn').addEventListener('click', determineIfAnswerCorrect);

// Project 10: Number Guessing Game

let numberToGuess = Math.floor(Math.random() * 1000) + 1;
let playersGuesses = [];
let guessesLeft = 10;
let canStillGuess = true;

function guessNumber() {
    if (canStillGuess === true) {
        let playersCurrentGuess = Number(document.getElementById('guesses-input').value);
        if (isNaN(playersCurrentGuess)) {
            alert('You have to write a number!');
        } else if (playersCurrentGuess > 1000 || playersCurrentGuess < 1) {
            alert('Please guess a number between 1 and 1000');
        } else {
            if (guessesLeft > 0) {
                if (playersCurrentGuess === numberToGuess) {
                    document.getElementById('guesses-left').textContent = 'You won!'
                    playersGuesses.push(playersCurrentGuess);
                    canStillGuess = false;
                    let playNumGameAgainBtn = document.createElement('btn');
                    playNumGameAgainBtn.setAttribute('class', 'btn-red');
                    playNumGameAgainBtn.setAttribute('id', 'play-num-game-again-btn');
                    playNumGameAgainBtn.style.padding = '4px';
                    document.getElementById('guessing-game').appendChild(playNumGameAgainBtn).textContent = 'Play Again';
                    document.getElementById('play-num-game-again-btn').addEventListener('click', function () {
                        numberToGuess = Math.floor(Math.random() * 1000) + 1;
                        playersGuesses = [];
                        guessesLeft = 10;
                        canStillGuess = true;

                        document.getElementById('guesses-left').textContent = 'You have 10 guesses.';
                        document.getElementById('previous-guesses-id').textContent = 'Previous Guesses: None';
                        document.getElementById('guess-was-id').textContent = 'Last guess was...';

                        document.getElementById('play-num-game-again-btn').remove();
                    });
                    document.getElementById('guesses-input').value = null;
                    return;
                } else if (playersCurrentGuess < numberToGuess) {
                    document.getElementById('guess-was-id').textContent = 'Last guess was too low.';
                    playersGuesses.push(playersCurrentGuess);
                } else if (playersCurrentGuess > numberToGuess) {
                    document.getElementById('guess-was-id').textContent = 'Last guess was too high.';
                    playersGuesses.push(playersCurrentGuess);
                }

                if (canStillGuess === true) {
                    guessesLeft--;
                    document.getElementById('previous-guesses-id').textContent = "Previous Guesses: " + playersGuesses;
                    document.getElementById('guesses-left').textContent = "You have " + guessesLeft + " guesses.";
                    if (guessesLeft === 0) {
                        canStillGuess = false;
                    }
                } 

                if (canStillGuess === false) {
                    document.getElementById('guesses-left').textContent = 'You lost...';
                    let playNumGameAgainBtn = document.createElement('btn');
                    playNumGameAgainBtn.setAttribute('class', 'btn-red');
                    playNumGameAgainBtn.setAttribute('id', 'play-num-game-again-btn');
                    playNumGameAgainBtn.style.padding = '4px';
                    document.getElementById('guessing-game').appendChild(playNumGameAgainBtn).textContent = 'Play Again';
                    document.getElementById('play-num-game-again-btn').addEventListener('click', function () {
                        numberToGuess = Math.floor(Math.random() * 1000) + 1;
                        playersGuesses = [];
                        guessesLeft = 10;
                        canStillGuess = true;

                        document.getElementById('guesses-left').textContent = 'You have 10 guesses.';
                        document.getElementById('previous-guesses-id').textContent = 'Previous Guesses: None';
                        document.getElementById('guess-was-id').textContent = 'Last guess was...';

                        document.getElementById('play-num-game-again-btn').remove();
                    });
                }
            }
        }
    }
    document.getElementById('guesses-input').value = null;
}

document.getElementById('check-answer-btn').addEventListener('click', guessNumber);