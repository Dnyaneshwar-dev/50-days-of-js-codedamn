const num = 3849;

function reverseGivenInteger(n) {
  // write your solution here

  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
