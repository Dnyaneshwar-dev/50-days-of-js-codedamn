// Problem statement : Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  // write your solution here
  while (true) {
    // Math.random() return the decimal number between 0 and 1
    // by multiplying it with rangeEnd we can insure that new number will be always <= rangeEnd
    // If new number >= rangeStart then we will return it
    var number = Math.random() * rangeEnd;

    // converting to integer
    number = parseInt(number);
    // found the number between rangeStart and rangeEnd
    if (number >= rangeStart) {
      return number;
    }
  }
  return;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
