function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([10, 20, 30, 40, 50], 25)); // [30, 40, 50]
console.log(filterArray([5, 4, 3, 2, 1], 2)); // [5, 4, 3]
console.log(filterArray([12, 5, 8, 130, 44], 10)); // [12, 130, 44]
console.log(filterArray([-1, -2, -3, -4, -5], -3)); // [-1, -2]
