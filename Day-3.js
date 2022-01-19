const num = 3849;

function reverseGivenInteger(num) {
  // write your solution here
  var rev = 0;

  while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return parseInt(rev);

  // return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
