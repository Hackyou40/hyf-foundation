// FreeCodeCamp Username_'Please add your freeCodeCamp username as answer for this'
const freeCodeCampUsername = "@arunkorva";

// Assignment task1_Smart-ease - Goes Global!_Work-1_Flight booking fullname function

function getFullName(firstName, surname) {
  return firstName + " " + surname;
}

const fullName1 = getFullName("Benjamin", "Hughes");
const fullName2 = getFullName("arun", "korva");

console.log(fullName1);
console.log(fullName2);

// Formal fullname_task-2_Updated Java script

function getFullName(firstName, surname, useFormalName) {
  if (!firstName && !surname) {
    return "";
  }
  const baseName = firstName + " " + surname;

  if (useFormalName === true) {
    return "Lord " + baseName;
  }
  return baseName;
}

console.log(getFullName("Benjamin", "Hughes", true));
console.log(getFullName("Benjamin", "Hughes", false));
console.log(getFullName("Benjamin", "Hughes"));
console.log(getFullName("", ""));

// Formal fullname_Task-3_Updated Women Java script

function getFormalFullName(firstName, surname, title) {
  const baseName = firstName + " " + surname;

  if (title) {
    return title + " " + baseName;
  }

  return baseName;
}

console.log(getFormalFullName("Elizabeth", "Windsor", "Lady"));
console.log(getFormalFullName("Benjamin", "Hughes", "Lord"));
console.log(getFormalFullName("Jane", "Doe"));

//Task-4_Event application

function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayIndex = new Date().getDay();
  const eventIndex = (todayIndex + daysFromToday) % 7;
  return weekdays[eventIndex];
}

//Task-5_Weather wear

function getOutfitSuggestion(temperature) {
  if (temperature < 0) {
    return "heavy winter coat, warm gloves, scarf, and a beanie";
  } else if (temperature < 10) {
    return "thick jacket, sweater, and warm trousers";
  } else if (temperature < 18) {
    return "light jacket or hoodie with jeans";
  } else if (temperature < 25) {
    return "shorts and a t-shirt";
  } else {
    return "swimsuit or very light linen clothes";
  }
}

const clothesToWear = getOutfitSuggestion(18);
console.log(clothesToWear);

//Task-6_Student manager
const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  if (class07Students.length >= 6 && studentName !== "The Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Alice");
addStudentToClass("Bob");
addStudentToClass("Charlie");
addStudentToClass("David");
addStudentToClass("Eve");
addStudentToClass("Frank");

console.log(getNumberOfStudents());

addStudentToClass("Grace");
addStudentToClass("Alice");
addStudentToClass("");
addStudentToClass("The Queen");

console.log(getNumberOfStudents());
console.log(class07Students);

//Task-7_Candy helper optional
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  let pricePerGram = 0;

  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  }

  const candyPrice = pricePerGram * weight;
  boughtCandyPrices.push(candyPrice);
}

function canBuyMoreCandy() {
  let totalSpent = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalSpent += boughtCandyPrices[i];
  }

  return totalSpent < amountToSpend;
}

addCandy("sweet", 20); // 20g * 0.5 = 10
addCandy("chocolate", 30); // 30g * 0.7 = 21
addCandy("toffee", 10); // 10g * 1.1 = 11

console.log(`Budget available: ${amountToSpend.toFixed(2)}`);

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
