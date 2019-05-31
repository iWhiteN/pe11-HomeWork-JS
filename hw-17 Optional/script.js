const fibonachi = (number) => {
	if (number <= 1) return number
	else return fibonachi(number - 1) + fibonachi(number - 2)
};

let userInput;

while (isNaN(userInput) && userInput !== null) {
	userInput = prompt('Input number\nEnter no more than 10', userInput);
}

if (userInput !== null) {
	alert(fibonachi(+userInput));
}