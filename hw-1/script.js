let userName = prompt('What is your name?');
let userAge = prompt('How old are you?');

// Clear NaN
if (!userName) {
	userName = '';
}
// Correct input
if (!userName || isNaN(userAge)) {
	userName = prompt('What is your name?', userName);
	userAge = prompt('How old are you?', userAge);
} else {
	if (userAge < 18) {
		alert('You are not allowed to visit this website');
	} else if (+userAge > 17 && +userAge < 23) {
		// Accept auth
		let authUser = confirm('Are you sure you want to continue?');
		authUser ? alert(`Welcome ${userName}`) : alert('You are not allowed to visit this website');
	} else if (+userAge > 22) {
		alert(`Welcome ${userName}`);
	}
}