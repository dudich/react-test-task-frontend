export const pipe = (...functions) => data =>
	functions.reduce((value, func) => func(value), data);

export function roundToTen(number) {
	return Math.round(number / 10) * 10;
}

export function getCategoriesRanges([minVal, maxVal]) {
	const categoryArr = [];
	for (let i = minVal; i < maxVal; i += 10) {
		console.log(i, i + 10);
		categoryArr.push([i, i + 10]);
	}
	return categoryArr;
}

export function getMaxMinValuesFromArray(array) {
	const maxVal = roundToTen(Math.max(...array));
	const minVal = roundToTen(Math.min(...array));
	return [minVal, maxVal];
}

export function mapToFlatArray(array) {
	return array.map(i => i.value);
}