// Write a program to reverse a string
// String can be reversed by iterating it and storing it in reverse order
// String can also be reversed by converting it to array, then joining it after reversing

const str = "JavaScript is awesome";

function reverseAString(str) {
  // write your solution here
  //   var rev = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     rev += str[i];
  //   }
  //   console.log(rev);
  //   return rev;
  var array = str.split("");
  console.log(array);
  array.reverse();
  return array.join("");
}

console.log(`Reversed string is: ${reverseAString(str)}`);
