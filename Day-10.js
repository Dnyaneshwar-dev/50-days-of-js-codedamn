const array = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
  // write your solution here
  return array.filter((ele) => {
    return ele.field != filterField;
  });
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);
