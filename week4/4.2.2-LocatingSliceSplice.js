const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstA = arr.indexOf('a');
const firstB = arr.indexOf('b');
const firstC = arr.indexOf('c');
// find the last index of "a", "b", and "c"
const lastC = arr.lastindexOf('c');
const lastB = arr.lastindexOf('b');
const lastA = arr.lastindexOf('a');
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicate(array, duplicateValue) {
  let firstIndex = array.indexOf(duplicateValue);
  let lastIndex = array.lastIndexOf(duplicateValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex 1);
    lastIndex = array.lastIndexOf(duplicateValue);
  }
  return array;
}
removeDuplicate(arr, "a");
removeDuplicate(arr, "b");
removeDuplicate(arr, "c");

