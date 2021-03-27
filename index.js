var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Gera um numero aleatorio de 1 até 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Gera um numero aleatorio de 1 até 6

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Validar winner player

//player 1 ganhou
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

document.getElementById("play").onclick = function(){
    playAgain();
};

function playAgain() {
    window.location.reload();
}

document.getElementsByClassName("dice").onclick = function() {
    playAgain();
}