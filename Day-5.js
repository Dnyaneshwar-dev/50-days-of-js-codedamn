const str = "XeroX";

function getTheGapX(str) {
  // write your solution here
  let firstIndex = -1;
  let lastIndex = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "X") {
      firstIndex = i;
      break;
    }
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == "X") {
      lastIndex = i;
      break;
    }
  }
  if (firstIndex == -1) return -1;

  return lastIndex - firstIndex;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
