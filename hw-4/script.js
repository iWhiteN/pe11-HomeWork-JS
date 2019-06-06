const userInput = () => {
	let firstName = prompt('Введите Имя'),
		lastName = prompt ('Введите фамилию');

	if (!firstName || !lastName) {
		return false
	}

	return {
		firstName: firstName,
		lastName: lastName
	}
}


const createNewUser = (user) => {
	const newUser = {
		firstName: user.firstName,
		lastName: user.lastName,
		getLogin: function () {
			return (this.firstName[0] + this.lastName).toLowerCase()
		},
		setFirstName(val) {
			Object.defineProperty(this, "firstName", { value: val });
		},
		setLastName(val) {
			Object.defineProperty(this, "lastName", { value: val });
		}
	}

	Object.defineProperty(newUser, "firstName", { writable: false });
	Object.defineProperty(newUser, "lastName", { writable: false });

	return newUser
}

const arruserInput = userInput();

if (arruserInput){
	const newUser = createNewUser(arruserInput);
	console.log(newUser.getLogin());
}