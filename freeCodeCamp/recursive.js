function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum + 1, endNum);
    numbers.unshift(startNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(1, 5)); // should return [1, 2, 3, 4, 5].
console.log(rangeOfNumbers(6, 9)); //should return [6, 7, 8, 9].
