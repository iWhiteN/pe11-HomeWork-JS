const cloneObj = (obj) => {

	if (obj == null || (typeof(obj) != 'object' && !Array.isArray(obj))) return obj;
	
	const newObj = {};
	
	for (let key in obj) {
		if (Array.isArray(obj[key])) {
			newObj[key] = obj[key].map(e => cloneObj(e));
		} else {
			newObj[key] = cloneObj(obj[key]);
		}
	}

	return newObj
}

// Пример
const copyObj = {
	string: 'str',
	number: 2,
	objA: {
		o: "a",
		v: "c"
	},
	arr: [1,23,4]
}

const newObj  = cloneObj(copyObj);

console.log('old obj', copyObj);
console.log('new obj', newObj);