function getMinMax(arr) {
	const minmax = {};
	arr.sort((a, b) => a - b);
	minmax.min = arr[0];
	minmax.max = arr[arr.length - 1];
	return minmax;
}
function main() {
	const arr = [1000, 11, 445, 1, 330, 3000];
	const minmax = getMinMax(arr);
	console.log("Minimum element is " + minmax.min);
	console.log("Maximum element is " + minmax.max);
}

main();
