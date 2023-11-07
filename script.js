let wordArray = ["abruptly", "absurd", "abyss", "affix", "avenue", "awkward"];
let randomWord = getRandomWord();
let gameWrapper = document.querySelector(".gameWrapper");
let keyboardArea = document.querySelector(".keyboardArea");
let startButton = document.querySelector(".startButton");
let keyArea;
let keyAreas = [];

// console.log(wordArray);

function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}
console.log(randomWord);

function createCardArea() {
  for (let i = 0; i < randomWord.length; i++) {
    keyArea = document.createElement("div");

    keyArea.className = "keyArea";

    keyArea.textContent = randomWord[i];
    keyboardArea.appendChild(keyArea);
    keyAreas.push(keyArea);
  }
}
createCardArea();
