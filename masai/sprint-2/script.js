var animals = [
  "Tiger",
  "Lion",
  "Deer",
  "Bear",
  "Elephant",
  "Rhinoceros",
  "Leopard",
  "Blackbuck",
  "Crocodile",
  "Panther",
  "Leopard",
  "Monkey",
  "Wolf",
  "Jackal",
  "Hyena",
];
const guessWord = [];
const answers = "";
const wordsMatch = null;

function wildAnimal() {
  let wildNames = animals[Math.floor(Math.random() * animals.length)];
  //   alert(wildNames);
}
wildAnimal();

function words() {
  wordsMatch = guessWord
    .split("")
    .map((letter) => (guessWord.indexOf(letter) >= 0 ? letter : "-"))
    .join("");

  document.getElementById("guessedWord").innerHTML = wordsMatch;
}
words();
