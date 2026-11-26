const nameInput = document.querySelector("#name");
const findButton = document.querySelector("#find-house");
const result = document.querySelector("#result");

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

findButton.addEventListener("click", function () {
  if (nameInput.value.trim() === "") {
    result.textContent = "Please enter your name!";
    return;
  }
  const randomIndex = Math.floor(Math.random() * houses.length);
  const selectedHouse = houses[randomIndex];

  result.textContent = nameInput.value + " belongs in " + selectedHouse + "!";
});
