const array = [2, 4, 3, 5, 1, 9, 7, 10, 8, 6];

function search() {
	let sorted = [];
	for (num of array) {
		if (num > 0) {
			sorted.push(num);

			console.log(sorted);
		}
	}
}
