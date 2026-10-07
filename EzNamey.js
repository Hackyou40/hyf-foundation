const firstWords = [
  "Easy",
  "Awesome",
  "Smart",
  "Fast",
  "Happy",
  "Quick",
  "Bright",
  "Bold",
  "Super",
  "Clever",
    ];
const secondWords = [
  "Corporation",
  "Labs",
  "Solutions",
  "Systems",
  "Hub",
  "Studio",
  "Ventures",
   "Labs",
  "Works",
  "Group",
  ];
const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters.`,
);
