// Truncate a string to a certain number of words

const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  // write your solution here
  var array = str.split(" ");
  while (array.length > wordLimit) array.pop();

  return array.join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
