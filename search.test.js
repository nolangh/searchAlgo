describe("findPairs", () => {
	it("should return [1, 2, 3, 5] for the array [2, 3, 1, 5,]", () => {
		//[1,2,2,3,3,5]
		var array = [2, 3, 1, 5];
		var result = search(array);
		expect(result).toEqual([1, 2, 3, 5]);
	});
	it("should return [1,2,3,4,5,6,7,8,9,10] for the array [2, 4, 3, 5, 1, 9, 7, 10,8,6]", () => {
		var array = [2, 4, 3, 5, 1, 9, 7, 10, 8, 6];
		var result = search(array);
		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});
});
