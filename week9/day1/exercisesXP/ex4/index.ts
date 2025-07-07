function checkNumber(num: number): string {
  if (num > 0) {
    return "The number is positive.";
  } else if (num < 0) {
    return "The number is negative.";
  } else {
    return "The number is zero.";
  }
}

console.log(checkNumber(10));   // positive
console.log(checkNumber(-5));   // negative
console.log(checkNumber(0));    // zero
