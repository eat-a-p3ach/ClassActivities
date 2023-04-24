const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("The form was submitted!");

  console.log("event", event);

  // NOTE: While inputs might look like an array in the console, it's actually an 'array-like' object.
  const inputs = event.target.elements;
  console.log("form's input elements: ", inputs);
  // Notice how in the console, it says "HTMLFormControlsCollection". HTMLCollection

  // NOTE: In order to iterate through an "array-like" object like a HTMLFormControlsCollection, we must convert it to an array. We can do this using Array.from() as shown bellow
  Array.from(inputs).forEach(input => {
    console.log(
      `This input is named ${input.name} and has a value of ${input.value}`
    );
  });
});
