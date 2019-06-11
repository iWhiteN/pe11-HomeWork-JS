const userInput = () => {
	let firstName = prompt('Введите имя'),
		lastName = prompt('Введите фамилию');

	if (!firstName || !lastName) return false

	return {
		name: firstName,
		lastName: lastName
	}
}


const pollTabel = (user) => {

	user.tabel = {};
	let tabelInputName,
		tabelInputValue;

	while (tabelInputName !== null) {
		tabelInputName = prompt('Введите название предмета');
		if (tabelInputName !== null) {
			tabelInputValue = prompt('Введите название оценки этого предмета');
			user.tabel[tabelInputName] = +tabelInputValue
		}
	}

	let res = 0,
		sumRes = 0,
		avg = 0,
		countRes = 0;

	for (key in user.tabel) {
		if (user.tabel[key] < 4) res++

		sumRes += user.tabel[key];
		countRes++
	}

	res === 0 ? console.log('Студент переведен на следующий курс') : null

	avg = sumRes / countRes
	avg > 7 ? console.log('Студенту назначена стипендия') : null

}

const user = userInput();
user ? pollTabel(user) : null