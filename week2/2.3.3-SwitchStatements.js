// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = 3;
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {
  case 3 : {
    dayName = `Today is Wednesday`;
    break;
  }
  case 1: {
    dayName = `Today is Monday`;
    break;
  }

  // Note the code blocks in the next 2 cases: Why?
  case 4: {
    const message = `Today is Thursday`;
    console.log(message);
    break;
  }
  case 5: {
    const message = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  }
  default: {
    console.log(`It's the end of the world as we know it!`);
    break;
}
  case 2: {`Which case goes here`}
    console.log(`Today is Tuesday`);
    break;
}
  // write a case here for the weekend (how many days in the weekend?)
  case 6||0: {
  alert(`It's the Weekend !!`)
  };

if (dayName !== 'Today'){
console.log(dayName);
}
