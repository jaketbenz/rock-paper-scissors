const container = document.querySelector(".container");

const rock = document.querySelector(".choice__rock");
const paper = document.querySelector(".choice__paper");
const scissors = document.querySelector(".choice__scissors");
const resultsText = document.querySelector(".results__text");
const humanScoreText = document.querySelector(".human__scoreText");
const computerScoreText = document.querySelector(".computer__scoreText");
const statusText = document.querySelector(".status__text");
const humanMoveText = document.querySelector(".human__moveText");
const computerMoveText = document.querySelector(".computer__moveText");

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

const playerSelection = () => {
	let output = input.toLowerCase();
	console.log(output);
	return output;
};
const computerSelection = () => {
	let options = ["Rock", "Paper", "Scissors"];
	let random = Math.floor(Math.random() * options.length);
	console.log(options[random]);
	return options[random];
};

let humanScore = parseInt(0);
let computerScore = parseInt(0);

const winner = () => {
	if (humanScore === 5) {
		rock.setAttribute("disabled", 1);
		paper.setAttribute("disabled", 1);
		scissors.setAttribute("disabled", 1);
		return (statusText.innerHTML = `<span>You won the match.</span>`);
	} else if (computerScore === 5) {
		rock.setAttribute("disabled", 1);
		paper.setAttribute("disabled", 1);
		scissors.setAttribute("disabled", 1);
		return (statusText.innerHTML = `<span>You lost the match.</span>`);
	} else {
		return (statusText.innerHTML = `<span>The match is not over yet </span>`);
	}
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		return "You tied.";
	}
	if (playerSelection === "Rock") {
		if (computerSelection === "Scissors") {
			humanScore++;
			return "You win!";
		} else if (computerSelection === "Paper") {
			computerScore++;
			return "You lost.";
		}
	}
	if (playerSelection === "Scissors") {
		if (computerSelection === "Paper") {
			humanScore++;
			return "You win!";
		} else if (computerSelection === "Rock") {
			computerScore++;
			return "You lost.";
		}
	}
	if (playerSelection === "Paper") {
		if (computerSelection === "Rock") {
			humanScore++;
			return "You win!";
		} else if (computerSelection === "Scissors") {
			computerScore++;
			return "You lost.";
		}
	}
};
const resetGame = () => {
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
	scissors.removeAttribute("disabled");
};
