const factorial = (number) => {
	if (number === 0) return 1
	return  number * factorial(number - 1)
};

let userInput;

while (isNaN(userInput) && userInput !== null) {
	userInput = prompt('Input number', userInput);
}

if (userInput !== null) {
	alert(factorial(+userInput));
}