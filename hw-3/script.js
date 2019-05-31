const calculate = (firstNum, secondNum, operation) => {
	let result;
	switch (operation) {
		case '+' :
			result = firstNum + secondNum
			break; 
		case '-' :
			result = firstNum - secondNum	
			break; 
		case '*' :
			result = firstNum * secondNum
			break; 
		case '/' :
			result = firstNum / secondNum
			break; 
		default: 
			result = 'Error operation'
	}
	return result
}



let firstNum,
	secondNum,
	operation;

while ((isNaN(firstNum) && firstNum != null) || (isNaN(secondNum) && secondNum != null) || (operation != '+' && operation != '-' && operation != '*' && operation != '/' && operation !== null)) {
	firstNum = prompt('Input First number', firstNum);
	secondNum = prompt('Input Second number', secondNum);
	operation = prompt('Input operation " +, -, *, / "', operation);
}

if (firstNum !== null && secondNum !== null && operation !== null) {
	console.log(calculate(+firstNum, +secondNum, operation));
}