const sodas = [
  {
    name: "Pepsi",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/pepsi.jpg"
  },
  {
    name: "Coke",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/coke.jpg"
  },
  {
    name: "NOS",
    sugarFree: false,
    energy: true,
    image: "fake.cdn/nos.jpg"
  },
  {
    name: "Diet Pepsi",
    sugarFree: true,
    energy: false,
    image: "fake.cdn/diet_pepsi.jpg"
  }
];

let attributeList = ["name", "image"];

sodas.forEach(element => console.log(`${element.name} + ${element.image}`));
// console.log(sodas);

// let list = sodas.map(elements => elements.name + ":" elements.image);
// console.log(list);

//THIS WORKS
let first = sodas.map(element => `${element.name} + ${element.image}`);
console.log(first);

// if whatever = attributeList
// return

// const newArr = [];
// sodas.forEach(item => newArr.push(item.name + ":" + item.image));

// sodas.forEach(element => console.log(attributeList));

//for (variable in object)
//statement
// for (const property in element) {
//   console.log(`${element.name}, ${element.image}`);
// }

// second
// let attributeList = [
//   "name",
//   "sugarFree",
//   "energy"
// ]

let second = sodas.map(
  element => `${element.name} + ${element.sugarFree} + ${element.energy}`
);
console.log(second);

// Definition:
// arr.some(callback(element[, index[, array]])[, thisArg])
// sodas.some(attributeList => )

//
