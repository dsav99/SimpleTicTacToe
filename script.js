const start = document.querySelector("#startButton").addEventListener('click', startGame);
const start1 = document.querySelector("#startButton");
const reset = document.querySelector("#resetButton").addEventListener('click', resetGame);
const reset1 = document.querySelector("#resetButton");

var circle = 8;
var cross = 8;

var gameOn = false;
var i = 1;

var hash = ["", "", "", "", "", "", "", "", ""];

function startGame() {
    const cards = document.querySelectorAll(".card");
    start1.style.display = 'none';
    reset1.style.display = 'block';
    gameOn = true;
    for (var i = 0; i < cards.length; i++) {
        const card = document.getElementById(i + 1);
        card.classList.add('fade-' + (i + 1));
        card.addEventListener('click', function () {
            setTimeout(function () {
                if (i % 2 === 0) {
                    card.style.color = 'yellow';
                    if (card.innerHTML === "") {
                        card.innerHTML = "X";
                        hash[card.id - 1] = "X";
                        i++;
                        checkWinners();
                    }
                }
                else {
                    card.style.color = 'red';
                    if (card.innerHTML === "") {
                        card.innerHTML = "O";
                        hash[card.id - 1] = "O";
                        i++;
                        checkWinners();


                    }
                }
            }, 400);
            card.style.transform = "rotateY(180deg)";

        });

    }

}


function resetGame() {
    gameOn = false;
    location.reload();
}



function checkWinners() {

    predict();

    if (hash[4] != "") {

        // DIAG ONE
        if (hash[0] === hash[4]) {
            if (hash[4] === hash[8]) {
                document.getElementById('left').style.display='block';
                document.getElementById('center').style.display='block';
                document.getElementById('right').style.display='block';
                document.getElementById('left').style.opacity='0';
                document.getElementById('right').style.opacity='0';
                document.getElementById('center').style.transform='rotate(-45deg)';

                setTimeout(() => {
                    alert(hash[4] + " WINS!");
                    resetGame();
                }, 500);


            }
        }

        // MIDDLE
        if (hash[3] === hash[4]) {
            if (hash[4] === hash[5]) {

                document.getElementById('top').style.display='block';
                document.getElementById('middle').style.display='block';
                document.getElementById('bottom').style.display='block';
                document.getElementById('top').style.opacity='0';
                document.getElementById('bottom').style.opacity='0';
                setTimeout(() => {
                    alert(hash[4] + " WINS!");
                    resetGame();
                }, 500);
            }
        }

        // CENTER
        if (hash[1] === hash[4]) {
            if (hash[4] === hash[7]) {
                document.getElementById('left').style.display='block';
                document.getElementById('center').style.display='block';
                document.getElementById('right').style.display='block';
                document.getElementById('left').style.opacity='0';
                document.getElementById('right').style.opacity='0';
                setTimeout(() => {
                    alert(hash[4] + " WINS!");
                    resetGame();
                }, 500);
            }
        }

        // DIAG TWO
        if (hash[2] === hash[4]) {
            if (hash[4] === hash[6]) {

                document.getElementById('top').style.display='block';
                document.getElementById('middle').style.display='block';
                document.getElementById('bottom').style.display='block';
                document.getElementById('top').style.opacity='0';
                document.getElementById('bottom').style.opacity='0';
                document.getElementById('middle').style.transform='rotate(-45deg)';
                setTimeout(() => {
                    alert(hash[4] + " WINS!");
                    resetGame();
                }, 500);

            }
        }
    }



    if (hash[0] != "") {

        // LEFT
        if (hash[0] === hash[3]) {
            if (hash[3] === hash[6]) {
                document.getElementById('left').style.display='block';
                document.getElementById('center').style.display='block';
                document.getElementById('right').style.display='block';
                document.getElementById('right').style.opacity='0';
                document.getElementById('center').style.opacity='0';
                setTimeout(() => {
                    alert(hash[0] + " WINS!");
                    resetGame();
                }, 500);
            }
        }


        // TOP


        if (hash[0] === hash[1]) {
            if (hash[1] === hash[2]) {
                document.getElementById('top').style.display='block';
                document.getElementById('middle').style.display='block';
                document.getElementById('bottom').style.display='block';
                document.getElementById('middle').style.opacity='0';
                document.getElementById('bottom').style.opacity='0';
                setTimeout(() => {
                    alert(hash[0] + " WINS!");
                    resetGame();
                }, 500);

            }
        }

    }

    if (hash[8] != "") {

        // BOTTOM
        if (hash[6] === hash[7]) {
            if (hash[7] === hash[8]) {

                document.getElementById('top').style.display='block';
                document.getElementById('middle').style.display='block';
                document.getElementById('bottom').style.display='block';
                document.getElementById('top').style.opacity='0';
                document.getElementById('middle').style.opacity='0';
                setTimeout(() => {
                    alert(hash[8] + " WINS!");
                    resetGame();
                }, 500);
            }
        }

        // RIGHT
        if (hash[2] === hash[5]) {
            if (hash[5] === hash[8]) {
                document.getElementById('left').style.display='block';
                document.getElementById('center').style.display='block';
                document.getElementById('right').style.display='block';
                document.getElementById('left').style.opacity='0';
                document.getElementById('center').style.opacity='0';
                setTimeout(() => {
                    alert(hash[8] + " WINS!");
                    resetGame();
                }, 500);
            }
        }
    }

}

function predict() {

}





