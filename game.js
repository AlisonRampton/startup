
class Game {
  chosenWord;
  code;
  players;
  spies;

  constructor(name, host, setID, publicSet, numSpies) {
      this.name = name;
      this.host = host;
      this.setID = setID;
      this.publicSet = publicSet;
      this.set = getSet(setID, publicSet);
      this.numSpies = numSpies;
      this.code = Math.floor(1000 + Math.random() * 9000);
      this.players = [host];
      this.spies = [];
  }

  bonusConstructor(players, code) {
    this.players = players;
    this.code = code;
  }

  chooseWord() {
    this.chosenWord = this.set[Math.floor(Math.random() * this.set.length)];
  }

  chooseSpies() {
    if (this.numSpies > this.players.length) {
      window.alert("ERROR: The number of spies is greater than the number of players");
      return;
    }

    this.spies = [];
    for (let i = 0; i < this.numSpies; i++) {
      let index = Math.floor(Math.random()*this.players.length);
      console.log(this.players.length);
      while (this.spies.includes(this.players[index])) {
        index = Math.floor(Math.random()*this.players.length);
      }
      this.spies.push(this.players[index]);
    }
  }

}

let GameDatabase = new Map();
if (localStorage.getItem("Games") === null){
  localStorage.setItem("Games", JSON.stringify(Object.fromEntries(CustomDatabase)));
}


async function startGame(form) {
  // GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  const room = form.roomName.value;
  const set = form.displaySet.value;
  const host = form.name.value;
  const numSpies = form.number.value;
  let publicSet = true;
  if (document.querySelector('#displaySet option:checked').parentElement.label === "Custom Sets") {
    publicSet = false;
  }
  let newGame = new Game(room, host, set, publicSet, numSpies);
  try {
    console.log("CHEESE!");
    await fetch('http://localhost:3000/api/host', {method: 'POST', body: JSON.stringify(newGame)});
  }
  catch(error) {
    console.log(`Oh noes! Error: ${error.message}`);
  }
  // GameDatabase.set(newGame.code, newGame);
  localStorage.setItem("CurrGame", newGame.code);
  localStorage.setItem("PlayerName", host);
  // localStorage.setItem("Games", JSON.stringify(Object.fromEntries(GameDatabase)));

  

}

function startRound() {
  GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  let roomCode = localStorage.getItem("CurrGame");
  let gameObj = GameDatabase.get(roomCode);
  let game = new Game(gameObj.name, gameObj.host, gameObj.setID, gameObj.publicSet, gameObj.numSpies); //GameDatabase.get(roomCode);
  game.bonusConstructor(gameObj.players, gameObj.code);
  game.chooseWord();
  game.chooseSpies();
  console.log(game);
  const name = localStorage.getItem("PlayerName");
  GameDatabase.delete(roomCode);
  GameDatabase.set(roomCode, game);
  localStorage.setItem("Games", JSON.stringify(Object.fromEntries(GameDatabase)));
  viewKnowledge(roomCode, name);
}


async function hostDisplay(elementID, desiredStatus) {
  // GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  let roomCode = localStorage.getItem("CurrGame");
  let playerName = localStorage.getItem("PlayerName");
  let game;
  try {
    game = await fetch(`http://localhost:3000/api/in-game?code=${roomCode}`);
  }
  catch(error) {
    console.log(`Oh noes! Error: ${error.message}`);
  }
  if ((game.host === playerName) === desiredStatus) {
    document.getElementById(elementID).style.display = 'inline-block';
  }
  else {
    document.getElementById(elementID).style.display = 'none';
  }
}


async function viewKnowledge() {
  // GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  let roomCode = localStorage.getItem("CurrGame");
  let playerName = localStorage.getItem("PlayerName");
  let game;
  try {
    game = await fetch(`http://localhost:3000/api/in-game?code=${roomCode}`);
  }
  catch(error) {
    console.log(`Oh noes! Error: ${error.message}`);
  }
  if (game.spies && game.spies.includes(playerName)) {
    window.alert("You are the spy");
  }
  else {
    window.alert(game.chosenWord);
  }
}

async function pageSetup() {
  // GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  let roomCode = localStorage.getItem("CurrGame");
  let game;
  try {
    game = await fetch(`http://localhost:3000/api/in-game?code=${roomCode}`);
  }
  catch(error) {
    console.log(`Oh noes! Error: ${error.message}`);
  }
  let roomNode = document.createTextNode(game.name);
  const roomElem = document.getElementById('gameName')
  roomElem.appendChild(roomNode);
  table('play-set-table', game.setID, game.set);
  table('player-table', 'Players', game.players);
  const textNode = document.createTextNode(roomCode);
  const codeElem = document.getElementById('roomCode');
  codeElem.appendChild(textNode);
}

function joinGame(form) {
  // GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  const roomCode = form.roomCode.value;
  const name = form.name.value;
  
  addPlayerToGame(roomCode, name);
  // game.players.push(name);
  // GameDatabase.delete(roomCode);
  // GameDatabase.set(roomCode, game);

  localStorage.setItem("CurrGame", roomCode);
  localStorage.setItem("PlayerName", name);
  // localStorage.setItem("Games", JSON.stringify(Object.fromEntries(GameDatabase)));
}