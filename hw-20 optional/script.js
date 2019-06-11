const progress = (speedUser, backLog, deadLine) => {
	let now = new Date(),

		// Отработка СП за 1 день
		sumQtySpeedUser = 0,

		// Сумма СП по всему беклогу
		sumQtyBacklog = 0;

	speedUser.forEach(e => sumQtySpeedUser += e);
	backLog.forEach(e => sumQtyBacklog += e);

	//Отработка СП за 1 час
	let sumQtySpeedUserForHour = sumQtySpeedUser / 8,

		// Получение дедлайна к-ва дней по unix
		afterDay = Math.round((new Date(deadLine).getTime()) / 1000 / 86400),

		// Получение текущего к-ва дней по unix
		nowDay = Math.round((new Date().getTime()) / 1000 / 86400),

		// К-во рабочих дней до дедлайна (без выходных)
		countWorkDays = 0;

	for (let i = nowDay ; i < afterDay; i++) {
		if (now.getDay() != 0 && now.getDay() != 6) {
			countWorkDays++
		}
	
		now.setDate(now.getDate()+1)
	}

	// Количество рабочих часов до дедлайна
	let countWorkHours =  countWorkDays * 8,

		// Сколько выполним СП за сумму часов до дедлайна
		sumSPhours = sumQtySpeedUserForHour * countWorkHours;
		
	if (sumSPhours >= sumQtyBacklog) {
		console.log (`Все задачи будут успешно выполнены за ${(sumSPhours - sumQtyBacklog) / sumQtySpeedUser} дня(ей) до наступления дедлайна!`);
	} else {
		console.log(`Команде разработчиков придется потратить дополнительно ${(sumQtyBacklog - sumSPhours) / sumQtySpeedUserForHour} часа(ов) после дедлайна, чтобы выполнить все задачи в беклоге`);
	}
}



// Test
const speedUser = [5, 5],
	  backLog = [10, 10, 10, 10, 10],
	  deadLine = new Date ('2019.06.23');

progress(speedUser, backLog, deadLine);