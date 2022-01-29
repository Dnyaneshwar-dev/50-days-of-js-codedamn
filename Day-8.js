const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
  // write your solution here
  const startDate = new Date(dateText1);
  const endDate = new Date(dateText2);
  return (endDate.getTime() - startDate.getTime()) / DAY_IN_MILLISECONDS;
  return;
}

console.log(
  `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);
