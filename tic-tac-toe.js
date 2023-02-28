let player1 = [], player2 = [];
let counter = 0;
let vineeth = true;
let block = document.querySelectorAll('.blocks');
for (let i = 0; i < block.length; i++) {
    // console.log(block[i]);
    block[i].addEventListener('click', function () {
        if (block[i].children.length == 0) {
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
    if (counter % 2 == 0) {
        document.querySelector('.player1').innerHTML = "Player1 Turn";
        document.querySelector('.player2').innerHTML = "";
    } else {
        document.querySelector('.player2').innerHTML = "Player2 Turn";
        document.querySelector('.player1').innerHTML = "";
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
    }
}

function tie() {
    document.getElementById('result').innerHTML = "Draw";
    document.querySelector('.player2').innerHTML = "";
    document.getElementById('result').style.color = "white";
}