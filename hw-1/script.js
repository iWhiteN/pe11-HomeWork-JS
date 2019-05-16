let userName = '',
	userAge = '';

while (userName == '' || userAge == '' || isNaN(userAge)) {
	userName = prompt('What is your name?', userName);
	userAge = prompt('How old are you?', userAge);
}

//Check for Cansel
if (userName != null && userAge != null) {

	if (+userAge < 18) {
		alert('You are not allowed to visit this website');	

	} else if (+userAge > 17 && +userAge < 23) {
		let authUser = confirm('Are you sure you want to continue?');
		authUser ? alert(`Welcome ${userName}`) : alert('You are not allowed to visit this website');

	} else {
		alert(`Welcome ${userName}`);
	}
}