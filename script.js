let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const move = document.querySelector(".move");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");

const genCompChoice = () => {
    const compChoice = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return compChoice[randomIdx];
}

const playGame = (userChoice) => {
    const computerChoice = genCompChoice();

    if (userChoice === computerChoice) {
        console.log("Game tied");
        move.innerText = `It's a Draw! Computer chose ${computerChoice}`;
    } else {
        if (
            (userChoice === "rock" && computerChoice === "scissor") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissor" && computerChoice === "paper")
        ) {
            move.innerText = `You Won! Computer chose ${computerChoice}`;
            userScore++;
        } else {
            move.innerText = `Computer Won! Computer chose ${computerChoice}`;
            compScore++;
        }
    }

    // Update the displayed scores
    user.innerText = userScore;
    comp.innerText = compScore;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
