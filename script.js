// VARIABLER & ARRAYER

// html element
let gameWrapper = document.querySelector(".gameWrapper");
let keyboardArea = document.querySelector(".keyboardArea");
let startButton = document.querySelector(".startButton");
let guessedLetters = document.querySelector(".guessedLetters");
let about = document.querySelector(".about");

//svg gubbe
let hangmanFull = document.querySelector(".fullImage");
let hangmanGround = document.querySelector("#ground");
let hangmanScaffold = document.querySelector("#scaffold");
let hangmanHead = document.querySelector("#head");
let hangmanBody = document.querySelector("#body");
let hangmanArms = document.querySelector("#arms");
let hangmanLegs = document.querySelector("#legs");

//arrayer m.m.
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
let randomWord = getRandomWord();
let wrongGuesses = [];
let keyArea;
let keyAreas = [];
let guessedLettersArray = [];
let tries = 0;
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

// FUNKTIONER

// slumpar fram ett ord med hjälp av random index
function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}
console.log(randomWord);

// create card area
function createCardArea() {}
for (let i = 0; i < randomWord.length; i++) {
  keyArea = document.createElement("div");

  keyArea.className = "keyArea";

  keyArea.textContent = randomWord[i];
  keyboardArea.appendChild(keyArea);
  keyAreas.push(keyArea);
}

// startar spelet:
createCardArea();

// reset card area
function resetCardArea() {
  keyAreas.forEach(function (keyArea) {
    keyboardArea.removeChild(keyArea);
  });
  keyAreas = [];
  tries = 0;
}

// eventlistener keypress
document.addEventListener("keypress", function (event) {
  let matchFound = false;
  guessedLettersArray.push(event.key);
  // om användaren tryckt på en key som matchar bokstav i keyareas, och matchfound är true, blir texten på bokstaven svart.
  for (let i = 0; i < keyAreas.length; i++) {
    if (event.key == keyAreas[i].textContent) {
      matchFound = true;
      keyAreas[i].style.color = "black";
    }
  }
  // om användaren tryckt på en key som inte finns i keyareas, och har tryckt färre än 6 gånger pushas key till html-elementet wrongguesses, och läggs till som textcontent. hangmanarray (gubben) visas som block en child i taget.
  if (!matchFound && tries < 6) {
    // console.log("not a match");
    wrongGuesses.push(event.key);

    guessedLetters.textContent = wrongGuesses;

    hangmanArray[tries].style.display = "block";
    tries++;
  }
  if (tries == 6) {
    about.textContent = "sorry, game over";
    startButton.style.display = "block";
  }
});

startButton.addEventListener("click", () => {
  resetCardArea();
});
