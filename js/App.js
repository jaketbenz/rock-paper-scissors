const container = document.querySelector(".container");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");

const resultsText = document.querySelector(".results--text");
const humanScoreText = document.querySelector(".human--score--text");
const computerScoreText = document.querySelector(".computer--score--text");
const statusText = document.querySelector(".status--text");

const humanMoveText = document.querySelector(".human--move--text");
const computerMoveText = document.querySelector(".computer--move--text");

const button = document.querySelectorAll("button");
button.forEach((button) => {
	button.addEventListener("click", () => {
		let computerValue = computerSelection();
		let returnedValue = playRound(button.id, computerValue);
		humanMoveText.innerHTML = `<span>${button.id}</span>`;
		computerMoveText.innerHTML = `<span>${computerValue}</span>`;
		resultsText.innerHTML = `<span>${returnedValue}</span> `;
		humanScoreText.innerHTML = `<span>${humanScore}</span>`;
		computerScoreText.innerHTML = `<span>${computerScore}</span>`;
		let matchStatusOutput = winner();
		statusText.innerHTML = `<span>${matchStatusOutput}</span>`;
	});
});

let playerSelection = function () {
	let output = input.toLowerCase();
	console.log(output);
	return output;
};
let computerSelection = function () {
	let options = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * options.length);
	console.log(options[random]);
	return options[random];
};
let humanScore = parseInt(0);
let computerScore = parseInt(0);

function winner() {
	if (humanScore === 5) {
		rock.setAttribute("disabled", 1);
		paper.setAttribute("disabled", 1);
		scissor.setAttribute("disabled", 1);
		return (statusText.innerHTML = `<span>You won the match.</span>`);
	} else if (computerScore === 5) {
		rock.setAttribute("disabled", 1);
		paper.setAttribute("disabled", 1);
		scissor.setAttribute("disabled", 1);
		return (statusText.innerHTML = `<span>You lost the match.</span>`);
	} else {
		return (statusText.innerHTML = `<span>The match is not over yet </span>`);
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "You tied.";
	}
	if (playerSelection === "rock") {
		if (computerSelection === "scissors") {
			humanScore++;
			return "You win!";
		} else if (computerSelection === "paper") {
			computerScore++;
			return "You lost.";
		}
	}
	if (playerSelection === "scissors") {
		if (computerSelection === "paper") {
			humanScore++;
			return "You win!";
		} else if (computerSelection === "rock") {
			computerScore++;
			return "You lost.";
		}
	}
	if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			humanScore++;
			return "You win!";
		} else if (computerSelection === "scissors") {
			computerScore++;
			return "You lost.";
		}
	}
}
function resetGame() {
	humanScore = 0;
	computerScore = 0;

	humanScoreText.innerHTML = `<span>0</span>`;
	computerScoreText.innerHTML = `<span>0</span>`;
	humanMoveText.innerHTML = "No Move";
	computerMoveText.innerHTML = "No Move";
	resultsText.innerHTML = "No Move";
	statusText.innerHTML = `<span>The match is not over yet. </span>`;

	rock.removeAttribute("disabled");
	paper.removeAttribute("disabled");
	scissor.removeAttribute("disabled");
}
