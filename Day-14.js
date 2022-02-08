/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
  // Your code here
  let number = 0;
  let power = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    number = number + power * digits[i];
    power = power * baseA;
  }

  var newNumber = [];

  while (number > 0) {
    newNumber.push(number % baseB);

    number = parseInt(number / baseB);
  }
  newNumber.reverse();
  return newNumber;
};
