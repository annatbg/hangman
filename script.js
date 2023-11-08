// variabler och arrayer
let about = document.querySelector(".about");
let wordArray = [
  "abruptly",
  "absurd",
  "abyss",
  "affix",
  "askew",
  "avenue",
  "awkward",
  "axiom",
  "azure",
  "bagpipes",
  "bandwagon",
  "banjo",
  "bayou",
  "beekeeper",
  "bikini",
  "blitz",
  "blizzard",
  "boggle",
  "bookworm",
  "boxcar",
  "boxful",
  "buckaroo",
  "buffalo",
  "buffoon",
  "buxom",
  "buzzard",
  "buzzing",
  "buzzwords",
  "caliph",
  "cobweb",
  "cockiness",
  "croquet",
  "crypt",
  "curacao",
  "cycle",
  "daiquiri",
  "dirndl",
  "disavow",
  "dizzying",
  "duplex",
  "dwarves",
  "embezzle",
  "equip",
  "espionage",
  "euouae",
  "exodus",
  "faking",
  "fishhook",
  "fixable",
  "fjord",
  "flapjack",
  "flopping",
  "fluffiness",
  "flyby",
  "foxglove",
  "frazzled",
  "frizzled",
  "fuchsia",
  "funny",
  "gabby",
  "galaxy",
  "galvanize",
  "gazebo",
  "giaour",
  "gizmo",
  "glowworm",
  "glyph",
  "gnarly",
  "gnostic",
  "gossip",
  "grogginess",
  "haiku",
  "haphazard",
  "hyphen",
  "iatrogenic",
  "icebox",
  "injury",
  "ivory",
  "ivy",
  "jackpot",
  "jaundice",
  "jawbreaker",
  "jaywalk",
  "jazziest",
  "jazzy",
  "jelly",
  "jigsaw",
  "jinx",
  "jiujitsu",
  "jockey",
  "jogging",
  "joking",
  "jovial",
  "joyful",
  "juicy",
  "jukebox",
  "jumbo",
  "kayak",
  "kazoo",
  "keyhole",
  "khaki",
  "kilobyte",
  "kiosk",
  "kitsch",
  "kiwifruit",
  "klutz",
  "knapsack",
  "larynx",
  "lengths",
  "lucky",
  "luxury",
  "lymph",
  "marquis",
  "matrix",
  "megahertz",
  "microwave",
  "mnemonic",
  "mystify",
  "naphtha",
  "nightclub",
  "nowadays",
  "numbskull",
  "nymph",
  "onyx",
  "ovary",
  "oxidize",
  "oxygen",
  "pajama",
  "peekaboo",
  "phlegm",
  "pixel",
  "pizazz",
  "pneumonia",
  "polka",
  "pshaw",
  "psyche",
  "puppy",
  "puzzling",
  "quartz",
  "queue",
  "quips",
  "quixotic",
  "quiz",
  "quizzes",
  "quorum",
  "razzmatazz",
  "rhubarb",
  "rhythm",
  "rickshaw",
  "schnapps",
  "scratch",
  "shiv",
  "snazzy",
  "sphinx",
  "spritz",
  "squawk",
  "staff",
  "strength",
  "strengths",
  "stretch",
  "stronghold",
  "stymied",
  "subway",
  "swivel",
  "syndrome",
  "thriftless",
  "thumbscrew",
  "topaz",
  "transcript",
  "transgress",
  "transplant",
  "triphthong",
  "twelfth",
  "twelfths",
  "unknown",
  "unworthy",
  "unzip",
  "uptown",
  "vaporize",
  "vixen",
  "vodka",
  "voodoo",
  "vortex",
  "voyeurism",
  "walkway",
  "waltz",
  "wave",
  "wavy",
  "waxy",
  "wellspring",
  "wheezy",
  "whiskey",
  "whizzing",
  "whomever",
  "wimpy",
  "witchcraft",
  "wizard",
  "woozy",
  "wristwatch",
  "wyvern",
  "xylophone",
  "yachtsman",
  "yippee",
  "yoked",
  "youthful",
  "yummy",
  "zephyr",
  "zigzag",
  "zigzagging",
  "zilch",
  "zipper",
  "zodiac",
  "zombie",
];
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

let hangmanFull = document.querySelector(".fullImage");
let hangmanGround = document.querySelector("#ground");
let hangmanScaffold = document.querySelector("#scaffold");
let hangmanHead = document.querySelector("#head");
let hangmanBody = document.querySelector("#body");
let hangmanArms = document.querySelector("#arms");
let hangmanLegs = document.querySelector("#legs");

let hangmanArray = [
  hangmanGround,
  hangmanScaffold,
  hangmanHead,
  hangmanBody,
  hangmanArms,
  hangmanLegs,
];

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
  about.textContent = "Press any key to start!";
  for (let part of hangmanArray) {
    part.style.display = "none";
  }
}

// starta spelet
createCardArea();

let gameOver = false;
// eventlistener keypress
document.addEventListener("keypress", function (event) {
  //const key = event.key;
  // let matchFound = false;
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

        about.textContent = `Den fanns!`;
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
      console.log("Du vann! spela igen?");
      about.textContent = "Du vann! spela igen?";
      //visa knapparna
      popupText.textContent = `Du vann! spela igen?`;

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
      about.textContent = `Ordet var: "${wholeWord}"! Du förlorade, spela igen?`;
      popupText.textContent = `Ordet var: "${wholeWord}"! Du förlorade, spela igen?`;
      //visa restart knapp
      startButton.style.display = "block";
      popupContainer.style.display = "flex";
    }
  } else if (guessedLettersArray.includes(event.key)) {
    about.textContent = `du har redan gissat på ${event.key}`;
    console.log("du har redan tryckt på den");
  }
});

startButton.addEventListener("click", () => {
  resetCardArea();
  createCardArea();
  gameOver = false;
});
