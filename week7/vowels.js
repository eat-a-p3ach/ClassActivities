//write a function that counts the number of vowels in a string.

//input - string
//output - number
//requirements - vowels aeiou

//enter string
// count vowels
//output number

function vowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  word = word.toLowercase();

  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) >= 0) {
      count++;
    }
  }
  console.log("Count", count);
}
