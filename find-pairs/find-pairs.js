function findPairs(array) {
	const sorted = array.sort(function (a, b) {
		//sorts the array
		return a - b;
	});
	console.log(sorted);
	let pair = 0; //set pairs to 0
	for (let i of sorted) {
		if (sorted[i] === sorted[i + 1]) {
			pair += 1; // cant figure out why this is returning 3 instead of 2
		}
	}
	console.log(pair);
	return pair;
}
