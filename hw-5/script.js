const userInput = () => {
	let firstName = prompt('Введите Имя'),
		lastName = prompt ('Введите фамилию');
		birthday = prompt('Введите дату рождения\nФормат "dd.mm.yyyy"');

	if (!firstName || !lastName || !birthday) {
		return false
	}

	return {
		firstName: firstName,
		lastName: lastName,
		birthday: `${birthday.split('.')[2]}.${birthday.split('.')[1]}.${birthday.split('.')[0]}`
	}
}


const createNewUser = (user) => {
	const newUser = {
		firstName: user.firstName,
		lastName: user.lastName,
		birthday: user.birthday,
		getLogin: function () {
			return (this.firstName[0] + this.lastName).toLowerCase()
		},
		setFirstName(val) {
			Object.defineProperty(this, "firstName", { value: val });
		},
		setLastName(val) {
			Object.defineProperty(this, "lastName", { value: val });
		},
		getPassword: function () {
			return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + new Date(this.birthday).getFullYear()
		},
		getAge: function () {
			return Math.floor((new Date() - new Date(this.birthday)) / (31556926 * 1000))
		}
	}

	Object.defineProperty(newUser, "firstName", { writable: false });
	Object.defineProperty(newUser, "lastName", { writable: false });

	return newUser
}
arruserInput = userInput();
if (arruserInput){
	const newUser = createNewUser(arruserInput);
	console.log(newUser.getAge());
	console.log(newUser.getPassword());
}