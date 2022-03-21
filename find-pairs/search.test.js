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
	/*it("should return [10,9,8,7,6,5,4,3,2,1] for the array [1,2,3,4,5,6,7,8,9,10]", () => {
		var array = [1,2,3,4,5,6,7,8,9,10];
		var result = search(array);
		expect(result).toEqual();
	});
	it("should return 1 for the array [2, 2]", () => {
		var array = [2, 2];
		var result = findPairs(array);
		expect(result).toEqual(1);
	});
	it("should return 1 for the array [2, 2, 2]", () => {
		var array = [2, 2, 2];
		var result = findPairs(array);
		expect(result).toEqual(1);
	});
	it("should return 2 for the array [3, 3, 3, 3]", () => {
		var array = [3, 3, 3, 3];
		var result = findPairs(array);
		expect(result).toEqual(2);
	});
	it("should return 3 for the array [8, 4, 6, 2, 6, 4, 7, 9, 5, 8]", () => {
		var array = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8];
		var result = findPairs(array);
		expect(result).toEqual(3);
	});
	it("should return 2 for the array [1, 1, 2, 2, 1]", () => {
		var array = [1, 1, 2, 2, 1];
		var result = findPairs(array);
		expect(result).toEqual(2);
	});*/
});