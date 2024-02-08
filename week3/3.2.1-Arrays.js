// create an Array using an Array literal
let games = ["takedown", "combat", "sidecontrol", "baseballchoke"];
// access the 1st item in the Array
console.log(games[0]);
// access the last item in the Array
console.log(games[2]);
// print the length of the Array
console.log(games.length);
// use the length property to access the last item in the Array
console.log(games[games.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
let newArr = [];

for (let game of games) {
newArr.push(`${game}`)
}

console.log(newArr);
