const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const gameCollection = client.db('fakeartist').collection('games');
const db = client.db('games');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function storeNewGame(game) {
  gameCollection.insertOne(game);
}

async function getGame(code) {
  console.log(code);
  const query = {'code': parseInt(code)};
  const cursor = await gameCollection.find(query);
  // console.log(await cursor.toArray());
  const game = await cursor.toArray();
  console.log(game);
  return game;
}

async function addPlayerToGame(code, playerName) {
  const query = {code: code};
  const options = {
    $push: {players: playerName}
  };
  const result = await gameCollection.updateOne(query, options);
}

function main() {
  console.log('I love you!');
}

module.exports = {getGame, addPlayerToGame, storeNewGame};