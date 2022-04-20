'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// with an input field use the value property
document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

const secretNumber = function () {
	return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	// whern there is no input
	if (!guess) {
		displayMessage('⛔ No number!');

		//  when player wins
	} else if (guess === secretNumber) {
		displayMessage('🎉Correct Number!🎉');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = score;
		}

		// when guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥 Game Over');
			document.querySelector('.score').textContent = 0;
		}

		// when guess is too low
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber();
	console.log(secretNumber());
	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
