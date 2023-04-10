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
  }

  chooseWord() {
    chosenWord = set[Math.floor(Math.random() * set.length)];
  }

  chooseSpies() {
    if (this.numSpies > this.players.length) {
      window.alert("ERROR: The number of spies is greater than the number of players");
      return;
    }

    this.spies = [];
    for (let i = 0; i < this.numSpies; i++) {
      let index = Math.floor(Math.random()*this.players.length);
      while (this.spies.includes(players[index])) {
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


function startGame(form) {
  GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  const room = form.roomName.value;
  const set = form.displaySet.value;
  const host = form.name.value;
  const numSpies = form.number.value;
  let publicSet = true;
  if (document.querySelector('#displaySet option:checked').parentElement.label === "Custom Sets") {
    publicSet = false;
  }
  let newGame = new Game(room, host, set, publicSet, numSpies);
  GameDatabase.set(newGame.code, newGame);
  localStorage.setItem("CurrGame", newGame.code);
  localStorage.setItem("PlayerName", host);
  localStorage.setItem("Games", JSON.stringify(Object.fromEntries(GameDatabase)));
}

function startRound() {
  GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  let game = GameDatabase.get(roomCode);
  game.chooseWord();
  game.chooseSpies();
  const name = localStorage.getItem("PlayerName");
  viewKnowledge(roomCode, name);
  localStorage.setItem("Games", JSON.stringify(Object.fromEntries(GameDatabase)));
}


function hostDisplay(elementID, desiredStatus) {
  GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  let game = GameDatabase.get(roomCode);
  if ((game.host === playerName) === desiredStatus) {
    document.getElementById(elementID).style.display = 'inline-block';
  }
  else {
    document.getElementById(elementID).style.display = 'none';
  }
}


function viewKnowledge(roomCode, playerName) {
  GameDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("Games"))));
  let game = GameDatabase.get(roomCode);
  if (game.spies.includes(playerName)) {
    window.alert("You are the spy");
  }
  else {
    window.alert(game.chosenWord);
  }
}