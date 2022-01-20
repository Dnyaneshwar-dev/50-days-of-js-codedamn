const time = "5:00AM";

function convertTo24HrsFormat(time) {
  // write your solution here
  let hour = parseInt(time[0] + time[1]);
  let second = parseInt(time[3] + time[4]);

  if (time[time.length - 2] == "A") {
    if (hour == 12) hour = 0;
  } else {
    if (hour != 12) hour += 12;
  }
  var ans = "";

  if (hour < 10) {
    ans += "0";
  }
  ans += hour.toString();
  ans += ":";
  if (second < 10) {
    ans += "0";
  }
  ans += second.toString();
  return ans;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
