let player1 = [], player2 = [];
let counter = 0;
let vineeth = true;
let gameStart = false;
let block = document.querySelectorAll('.blocks');
for (let i = 0; i < block.length; i++) {
    // console.log(block[i]);
    block[i].addEventListener('click', function () {
        if (block[i].children.length == 0 && gameStart) {
            let ele = document.createElement('span');
            if (counter % 2 == 0 && vineeth) {
                ele.innerHTML = "x";
                ele.style.color = "yellow"
                player1.push(i);
            } else {
                if (vineeth) {
                    ele.innerHTML = "o";
                    ele.style.color = "blue";
                    player2.push(i)
                }

            }
            block[i].append(ele);
            counter++;
            player();
            checkResult();
            if (counter == 9) {
                tie();
            }
        }
    })
}

function player() {
    if (gameStart) {
        if (counter % 2 == 0) {
            document.querySelector('.player1').innerHTML = "Player1 Turn";
            document.querySelector('.player2').innerHTML = "";
        } else {
            document.querySelector('.player2').innerHTML = "Player2 Turn";
            document.querySelector('.player1').innerHTML = "";
        }
    }
}

function checkResult() {
    if ((player1.includes(0) && player1.includes(1) && player1.includes(2)) ||
        (player1.includes(0) && player1.includes(3) && player1.includes(6)) ||
        (player1.includes(0) && player1.includes(4) && player1.includes(8)) ||
        (player1.includes(1) && player1.includes(4) && player1.includes(7)) ||
        (player1.includes(2) && player1.includes(5) && player1.includes(8)) ||
        (player1.includes(4) && player1.includes(6) && player1.includes(2)) ||
        (player1.includes(3) && player1.includes(4) && player1.includes(5)) ||
        (player1.includes(6) && player1.includes(7) && player1.includes(8))) {
        document.getElementById('result').innerHTML = "Player1 Wins";
        document.getElementById('result').style.color = "yellow";
        document.querySelector('.player2').innerHTML = "";
        document.querySelector('.player1').innerHTML = "";
        counter = "vineeth";
        vineeth = false;
        gameStart = false;
        winningPlay();
    }

    if ((player2.includes(0) && player2.includes(1) && player2.includes(2)) ||
        (player2.includes(0) && player2.includes(3) && player2.includes(6)) ||
        (player2.includes(0) && player2.includes(4) && player2.includes(8)) ||
        (player2.includes(1) && player2.includes(4) && player2.includes(7)) ||
        (player2.includes(2) && player2.includes(5) && player2.includes(8)) ||
        (player2.includes(4) && player2.includes(6) && player2.includes(2)) ||
        (player2.includes(3) && player2.includes(4) && player2.includes(5)) ||
        (player2.includes(6) && player2.includes(7) && player2.includes(8))) {
        document.getElementById('result').innerHTML = "Player2 Wins";
        document.getElementById('result').style.color = "blue";
        document.querySelector('.player2').innerHTML = "";
        document.querySelector('.player1').innerHTML = "";
        counter = "vineeth";
        vineeth = false;
        gameStart = false;
        winningPlay();
    }
}

function tie() {
    document.getElementById('result').innerHTML = "Draw";
    document.querySelector('.player2').innerHTML = "";
    document.getElementById('result').style.color = "white";
}

function start() {
    gameStart = true;
    player();
    document.getElementById('start').style.color = 'blue';
    setTimeout(function () {
        document.getElementById('start').style.color = '';
    }, 300);
    document.getElementById('clickMe').innerHTML = "";
}

function reset() {
    gameStart = false;
    document.getElementById('reset').style.color = 'pink';
    setTimeout(function () {
        document.getElementById('reset').style.color = '';
    }, 300);
    player1 = [];
    player2 = [];
    for (let i = 0; i < block.length; i++) {
        block[i].innerHTML = '';
    }
    document.querySelector('.player2').innerHTML = "";
    document.querySelector('.player1').innerHTML = "";
    counter = 0;
    vineeth = true;
    document.getElementById('clickMe').innerHTML = "For to start the game click the start button";
    document.getElementById('result').innerHTML = "";
}

function play() {
    if (gameStart) {
        var audio = document.getElementById("audio");
        audio.play();
    }
}

function winningPlay() {
    var audio1 = document.getElementById('audio1');
    audio1.play();
}