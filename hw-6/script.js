const filterBy = (arr, type) => {
	const newArr = [];

	arr.forEach(e => {
		if ( typeof(e) != type) {
			newArr.push(e)
		}
	})

	// Черещ filter
	/*
	arr.filter(e => typeof(e) != type)
	*/

	return newArr
}