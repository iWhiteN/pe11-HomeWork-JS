let userInput;

while ((!userInput && userInput != null) || ((+userInput ^ 0) !== +userInput)) {
	userInput = prompt('Enter range', userInput);
	// Clear NaN
	userInput = isNaN(userInput) ? '' : userInput;
}

userInput = +userInput;

if (userInput !== null) {

	let hasResult;
	for (let i = userInput+1;i--;) {
		if (!(i % 5) && i !== 0) {
			console.log(`${i} is a multiple of 5`);
			hasResult = true;
		}
	}

	hasResult ? null : console.log('Sorry, no numbers');
}