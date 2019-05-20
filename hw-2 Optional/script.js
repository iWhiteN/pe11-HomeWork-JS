let userInput = prompt('Enter range\nExample "1 10"'),
	firstNum = +userInput.split(' ')[0],
	secondNum = +userInput.split(' ')[1],
	primeNum;

while ((!userInput && userInput != null) || ((firstNum ^ 0) !== firstNum) || ((secondNum ^ 0) !== secondNum)) {
	alert('This number is not valid');
	userInput = prompt('Enter range\nExample "1 10"', userInput);
	firstNum = +userInput.split(' ')[0];
	secondNum = +userInput.split(' ')[1];
}

if (userInput !== null) {

	for (let i = firstNum; i <= secondNum; i++) {
		primeNum = true;

		//Exeption
		if (i > 1) {

			for (let j = 2; j < i; j++) {
				if (!(i % j)) {
					primeNum = false;
				}
			}
			if (primeNum) {console.log(`${i} is a prime number`);}
		}
	}
}