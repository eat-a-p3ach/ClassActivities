//LYNCY
//Write a function that determines if a string is a palindrome.
//palindrome is the same forwards as it is backwards - racecar, radar, noon,

//input is a string, output is boolean
//comparison statement

//ROMAN
// function Palindrome (input of string) {
//   if else statement
// return Palindrome()
// }
// console.log(Palindrome ());
// const arr = ["racecar"]
// const arr = ["table"]
// param = z
// let string = "racecar";
// let splitstring = string.split();
// console.log(splitstring);

//JOSEF
function isPalindrome(string) {
  return (
    string ===
    string
      .split("")
      .reverse()
      .join("")
  );
}
console.log(isPalindrome("Racecar"));

// function isPalindrome (param) {
// if (param === param.reverse) {
//   console.log(true);
// } else {
// console.log(false);
// }

// let ourString = "Welcome to Missouri";
// let splitArray = ourString.split();
// console.log(splitArray);
