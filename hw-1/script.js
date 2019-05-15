let userName = prompt('What is your name?'),
	userAge = prompt('How old are you?')

// Correct input
if (userName && !isNaN(parseInt(userAge))) {

	if (parseInt(userAge) < 18) {
		alert('You are not allowed to visit this website');

	} else if (parseInt(userAge) > 17 && parseInt(userAge) < 23) {
		// Accept auth
		let authUser = confirm('Are you sure you want to continue?');
		authUser ? alert(`Welcome ${userName}`) : alert('You are not allowed to visit this website');

	} else if (parseInt(userAge) > 22) {
		alert(`Welcome ${userName}`);
	}

// Repeat input
} else if (userName != null && userAge != null) {
	userName = prompt('Invalid input, please re-enter data \nWhat is your name?', userName);
	userAge = prompt('Invalid input, please re-enter data \nHow old are you?', userAge);

	if (userName && !isNaN(parseInt(userAge))) {

		if (parseInt(userAge) < 18) {
			alert('You are not allowed to visit this website');
	
		} else if (parseInt(userAge) > 17 && parseInt(userAge) < 23) {
			// Accept auth
			let authUser = confirm('Are you sure you want to continue?');
			authUser ? alert(`Welcome ${userName}`) : alert('You are not allowed to visit this website');
	
		} else if (parseInt(userAge) > 22) {
			alert(`Welcome ${userName}`);
		}
	}
}