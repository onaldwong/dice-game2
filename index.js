var playerName = prompt("What is your name? Fool!")
document.querySelector(".player").innerHTML = playerName;

var playerOneScore = 0;
var playerTwoScore = 0;

function diceGame() {

var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// function rollDice() {
//     if (randomNumber1 == 1) {
//         document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
//     } else if(randomNumber1 == 2) {
//         document.querySelector(".img1").setAttribute("src", "./images/dice2.png")
//     } else if(randomNumber1 == 3) {
//         document.querySelector(".img1").setAttribute("src", "./images/dice3.png")
//     } else if(randomNumber1 == 4) {
//         document.querySelector(".img1").setAttribute("src", "./images/dice4.png")
//     } else if(randomNumber1 == 5) {
//         document.querySelector(".img1").setAttribute("src", "./images/dice5.png")
//     } else if(randomNumber1 == 6) {
//         document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
//     } 

//     if (randomNumber2 == 1) {
//         document.querySelector(".img2").setAttribute("src", "./images/dice1.png")
//     } else if(randomNumber2 == 2) {
//         document.querySelector(".img2").setAttribute("src", "./images/dice2.png")
//     } else if(randomNumber2 == 3) {
//         document.querySelector(".img2").setAttribute("src", "./images/dice3.png")
//     } else if(randomNumber2 == 4) {
//         document.querySelector(".img2").setAttribute("src", "./images/dice4.png")
//     } else if(randomNumber2 == 5) {
//         document.querySelector(".img2").setAttribute("src", "./images/dice5.png")
//     } else if(randomNumber2 == 6) {
//         document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
//     }        

// }

// rollDice();

    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "You have won this roll! Keep going!";
        playerOneScore ++;
    } else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Computer wins this roll! Do Better, fool!";
        playerTwoScore ++;
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

document.querySelector(".playerOneScore").innerHTML = playerOneScore;
document.querySelector(".playerTwoScore").innerHTML = playerTwoScore;

if(playerOneScore == 5) { 
    document.querySelector("h1").innerHTML = "You Have Won 5 Times! Good Job!";
    document.querySelector(".rollButton > button").disabled = true;
} else if(playerTwoScore == 5) {
    document.querySelector("h1").innerHTML = "Computer has beaten your ass, try again!";
    document.querySelector(".rollButton > button").disabled = true;
}

}


// console.log(randomNumber1, randomNumber2)