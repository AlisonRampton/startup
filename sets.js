"use strict";

const PublicDatabase = new Map();
let CustomDatabase = new Map();
if (localStorage.getItem("CustomSets") == null){
  localStorage.setItem("CustomSets", JSON.stringify(Object.fromEntries(CustomDatabase)));
}

PublicDatabase.set("Animals", [
  "Cat",
  "Fish",
  "Rabbit",
  "Penguin",
  "Squirrel",
  "Capybara",
  "Parrot"
]);

PublicDatabase.set("Locations", [
  "Farm",
  "Bank",
  "National Park",
  "Airplane",
  "Restaurant",
  "University",
  "Swimming Pool"
]);

PublicDatabase.set("Superheroes", [
  "Spiderman",
  "Superman",
  "Batman",
  "Iron Man",
  "Captain America",
  "Squirrel Girl",
  "Doctor Strange",
  "Hawkeye"
]);


// document.querySelector('#lstparameters option:checked').parentElement.label

function getSet(setID, publicSet) {
  if (publicSet) {
    return PublicDatabase.get(setID);
  }
  else {
    CustomDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("CustomSets"))));
    return CustomDatabase.get(setID);
  }
}

function selectTable(tableID) {
  let dataKey = document.querySelector('#displaySet option:checked').value;
  let data = [];
  if (document.querySelector('#displaySet option:checked').parentElement.label === "Public Sets") {
    data = PublicDatabase.get(dataKey);
  }
  else {
    CustomDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("CustomSets"))));
    data = CustomDatabase.get(dataKey);
  }
  table(tableID, dataKey, data);
}

function table(tableID, dataKey, data) {

  if (!!data && data.length > 1) {
    const tableElement = generateTable(dataKey, data);

    const output = document.getElementById(tableID);

    removeAllChildNodes(output);
    output.appendChild(tableElement);
  }
  else if (!!data){
    outputData("Empty Set", "Add some entries to this set!", tableID)
  }
  else {
    outputData("invalid input", dataKey, tableID);
  }
}

function generateTable(header, data) {
  const tableElement = document.createElement("table");
  tableElement.classList.add("table");
  tableElement.classList.add("table-info");
  tableElement.classList.add("table-striped");

  generateHeader(header, tableElement);
  generateRows(data, tableElement);

  return tableElement;
}

function generateHeader(header, tableElement) {
  const headElement = document.createElement("thead");
  const rowElement = document.createElement("tr");
  tableElement.appendChild(headElement);
  headElement.appendChild(rowElement);

  
  const cellElement = document.createElement("th");
  rowElement.appendChild(cellElement);
  headElement.classList.add("table-dark");
  const textNode = document.createTextNode(header);
  cellElement.appendChild(textNode);
  
}

function generateRows(data, tableElement) {
  const bodyElement = document.createElement("tbody");
  tableElement.appendChild(bodyElement);
  data.forEach((dataRow) => {
    const rowElement = document.createElement("tr");
    bodyElement.appendChild(rowElement);

    const cellElement = document.createElement("td");
    rowElement.appendChild(cellElement);
    const textNode = document.createTextNode(dataRow);
    cellElement.appendChild(textNode);

  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function outputData(title, data, ID) {
  const output = document.getElementById(ID);
  output.innerHTML = `<h3>${title}</h3><pre>${JSON.stringify(
    data,
    null,
    2
  )}</pre>`;
}

function setOptions(showPublic, showPrivate) {
  const output = document.getElementById("displaySet");
  removeAllChildNodes(output);
  const defaultElement = document.createElement("option");
  output.appendChild(defaultElement);
  defaultElement.value="";
  defaultElement.disabled = true;
  defaultElement.selected = true;
  const defaultText = document.createTextNode("Select a set");
  defaultElement.appendChild(defaultText);

  if (showPublic) {
    const publicElement = document.createElement("optgroup");
    publicElement.label = "Public Sets";
    output.appendChild(publicElement);

    PublicDatabase.forEach((value, key, map)=>{
      const optElement = document.createElement("option");
      publicElement.appendChild(optElement);
      const textNode = document.createTextNode(key);
      optElement.appendChild(textNode);
    });
  }

  if (showPrivate) {
    CustomDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("CustomSets"))));
    const customElement = document.createElement("optgroup");
    customElement.label = "Custom Sets";
    output.appendChild(customElement);

    CustomDatabase.forEach((value, key, map)=>{
      const optElement = document.createElement("option");
      customElement.appendChild(optElement);
      const textNode = document.createTextNode(key);
      optElement.appendChild(textNode);
    });
  }
}

function addSet() {
  const setName = window.prompt("Please enter the name of your new set:","new set");
  CustomDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("CustomSets"))));
  if (setName) {CustomDatabase.set(setName,[]);}
  localStorage.setItem("CustomSets", JSON.stringify(Object.fromEntries(CustomDatabase)));
  setOptions(false, true);
}

function addItemToSet() {
  CustomDatabase = new Map(Object.entries(JSON.parse(localStorage.getItem("CustomSets"))));
  const setName = document.querySelector('#displaySet option:checked').value;
  const itemName = window.prompt("Please enter what you want to add to this set:","new entry");
  CustomDatabase.get(setName).push(itemName);
  localStorage.setItem("CustomSets", JSON.stringify(Object.fromEntries(CustomDatabase)));
  selectTable('set-table');
}