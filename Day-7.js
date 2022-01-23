const number = "0 9876543210";

function validateMobile(num) {
  // write your solution here
  if (num.length == 0) return false;
  if (num[0] == "+") {
    //if (num.length != 13) return false;
    let s = num.substring(3);
    while (s[0] == " ") {
      s = s.substring(1);
    }
    while (s[s.length - 1] == " ") {
      s = s.substring(0, s.length - 1);
    }
    if (s.length != 10) return false;
  } else if (num[0] == "0") {
    let s = num.substring(1);
    while (s[0] == " ") {
      s = s.substring(1);
    }
    while (s[s.length - 1] == " ") {
      s = s.substring(0, s.length - 1);
    }
    if (s.length != 10) return false;
  } else {
    let s = num;
    while (s[0] == " ") {
      s = s.substring(1);
    }
    while (s[s.length - 1] == " ") {
      s = s.substring(0, s.length - 1);
    }
    if (s.length != 10) return false;
  }
  return true;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
