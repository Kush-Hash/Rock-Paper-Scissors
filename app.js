const options = document.querySelectorAll(".optionButtons");
const playerHand = document.querySelector(".left img");
const computerHand = document.querySelector(".right img");
const gifText = document.querySelector(".gif");
const taklu = document.querySelector(".taklu");
const playerScore = document.querySelector(".yourScore");
const computerScore = document.querySelector(".computerScore");
const hands = document.querySelectorAll(".hand img");

let pScore = 0;
let cScore = 0;

const playMatch = () => {
    // to romve the animation of the bouncing hand after end 
    hands.forEach(hand => {
        hand.addEventListener('animationend', function () {
            this.style.animation = "";
        });
    });

    options.forEach(option => {
        option.addEventListener("click", function () {
            const computerOptions = ["rock", "paper", "scissor"];
            let computerNumber = Math.floor(Math.random() * 3);
            let computerChoice = computerOptions[computerNumber];

            playerHand.src = `./assets2/rock.png`;
            computerHand.src = `./assets2/rock.png`;

            gifText.textContent = "";

            //adding animation to hand
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";

            setTimeout(() => {
                //comparing hands
                const playerChoice = this.querySelector('p').textContent.trim();
                compare(playerChoice, computerChoice);

                playerHand.src = `./assets2/${playerChoice}.png`;
                computerHand.src = `./assets2/${computerChoice}.png`;

            }, 2000);

        });
    });

};

const compare = (playerChoice, computerChoice) => {
    //checking for tie
    if (playerChoice === computerChoice) {
        gifText.textContent = "It's a draw";
        return;
    }
    //checking for rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissor") {
            gifText.textContent = "Player wins";
            pScore++;
            updateScore();
            return;
        }
        else {
            gifText.textContent = "Computer wins!";
            cScore++;
            updateScore();
            return;
        }
    }
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            gifText.textContent = "Player wins!";
            pScore++;
            updateScore();
            return;
        }
        else {
            gifText.textContent = "Computer wins!";
            cScore++;
            updateScore();
            return;
        }
    }
    //checking for papper
    if (playerChoice === "scissor") {
        if (computerChoice === "paper") {
            gifText.textContent = "Player wins!";
            pScore++;
            updateScore();

            return;
        }
        else {
            gifText.textContent = "Computer wins!";
            cScore++;
            updateScore();
            return;
        }
    }
};

const updateScore = () => {
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};


playMatch();