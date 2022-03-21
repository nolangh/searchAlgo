const array = [2, 4, 3, 5, 1, 9, 7, 10, 8, 6];

function searchAlgo(array) {
	for (let i = 0; i < array.length; i++) {
		let firstIndex = i;
		for (let j = i; j < array.length; j++) {
			if (array[j] < array[firstIndex]) {
				firstIndex = j;
			}
		}
		[array[i], array[firstIndex]] = [array[firstIndex], array[i]];
	}
	return array;
}
