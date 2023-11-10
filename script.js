// variabler och arrayer

let about = document.querySelector(".about");
let wordArray = ["pirat","hatt","mössa","katten","höna","blommor","skepp","sjöfart","hav","bil","retro"];
let counter = 0;
let randomWord = getRandomWord();
let gameWrapper = document.querySelector(".gameWrapper");
let keyboardArea = document.querySelector(".keyboardArea");
let startButton = document.querySelector(".startButton");
let guessedLetters = document.querySelector(".guessedLetters");
let wrongGuesses = [];
let keyArea;
let keyAreas = [];
let guessedLettersArray = [];
let tries = 0;
let popupContainer = document.querySelector(".popup-container");
let popupText = document.querySelector(".popup-text");
let aboutH2Animation = document.querySelector(".about h2")

let hangmanFull = document.querySelector(".fullImage");
let hangmanGround = document.querySelector("#ground");
let hangmanScaffold = document.querySelector("#scaffold");
let hangmanHead = document.querySelector("#head");
let hangmanBody = document.querySelector("#body");
let hangmanArms = document.querySelector("#arms");
let hangmanLegs = document.querySelector("#legs");

let hangmanArray = [hangmanGround,hangmanScaffold,hangmanHead,hangmanBody,hangmanArms,hangmanLegs];

for (let part of hangmanArray) {
  part.style.display = "none";
}

// funktioner
function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

function createCardArea() {
  let randomWord = getRandomWord();
  for (let i = 0; i < randomWord.length; i++) {
    keyArea = document.createElement("div");
    keyArea.className = "keyArea";
    keyArea.textContent = randomWord[i];
    keyboardArea.appendChild(keyArea);
    keyAreas.push(keyArea);
  }
  console.log(randomWord);
}

function resetCardArea() {
  keyAreas.forEach(function (keyArea) {
    keyArea.textContent = "";
    keyboardArea.removeChild(keyArea);
  });
  keyAreas = [];
  tries = 0;
  counter = 0;
  startButton.style.display = "none";
  guessedLettersArray = [];
  wrongGuesses = [];
  guessedLetters.textContent = "";
  popupContainer.style.display = "none";
  about.appendChild(aboutH2Animation);
  for (let part of hangmanArray) {
    part.style.display = "none";
  }
}

// starta spelet
createCardArea();

let gameOver = false;
// eventlistener keypress
document.addEventListener("keypress", function (event) {
  //kontrollera om spelet inte är över
  if (!guessedLettersArray.includes(event.key) && gameOver == false) {
    //pusha bokstaven till arrayen
    guessedLettersArray.push(event.key);

    let matchFound = false;

    //loopa igenom alla keyAreas
    for (let i = 0; i < keyAreas.length; i++) {
      //om tangenttrycket matchar texten i keyArea
      if (event.key == keyAreas[i].textContent && counter < keyAreas.length) {
        keyAreas[i].style.color = "black";
        counter++;
        matchFound = true;
        // text styling i about-div
        about.textContent = `Den fanns!`;
        about.style.fontSize = "3rem";
        about.style.fontWeight = "600";
        about.style.fontFamily = "VT323";
        console.log("counter:", counter);
      }
    }
    //om ingen matchning hittades
    if (!matchFound) {
      tries++;
      //visa kroppsdel av hangedman
      wrongGuesses.push(event.key);
      hangmanArray[tries - 1].style.display = "block";
      about.textContent = ``;
      guessedLetters.textContent = `"${wrongGuesses}" finns inte! försök ${tries}/6`;
      console.log("Tries:", tries);
    }

    //kontrollera om spelet är vunnet
    if (counter == keyAreas.length) {
      gameOver = true;
      let wholeWord = keyAreas.map((area) => area.textContent).join("");
      console.log("Du vann! spela igen?");
      about.textContent = "";
      //visa knapparna
      popupText.textContent = `Du vann! :) Ordet var: "${wholeWord}"! Spela igen?`;
      popupContainer.style.display = "flex";
      startButton.style.display = "block";
    }
    //kontrollera om spelet är förlorat
    if (tries == 6) {
      for (const part of hangmanArray) {
        part.style.display = "block";
      }
      console.log("Du förlorade... spela igen?");
      gameOver = true;

      //säg vad det hela ordet är
      let wholeWord = keyAreas.map((area) => area.textContent).join("");
      about.textContent = "";
      popupText.textContent = `Du förlorade :( Ordet var: "${wholeWord}"! Spela igen?`;
      //visa restart knapp
      startButton.style.display = "block";
      popupContainer.style.display = "flex";
    }
  } else if (guessedLettersArray.includes(event.key) && gameOver == false) {
    // text styling i about-div
    about.style.fontSize = "3rem";
    about.style.fontWeight = "600";
    about.style.fontFamily = "VT323";
    about.textContent = `du har redan gissat på ${event.key}`;
    console.log("du har redan tryckt på den");
  }
});

// starta om spelet med start-button
startButton.addEventListener("click", () => {
  resetCardArea();
  createCardArea();
  gameOver = false;
});
