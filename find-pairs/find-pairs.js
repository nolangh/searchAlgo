function findPairs(array) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] == array[j]) {
				count++; //got it to count duplicates now I need it to retun -1 if there are no duplicates
			}
		}
	}
	return count;
}
