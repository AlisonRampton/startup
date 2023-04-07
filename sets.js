"use strict";

const PublicDatabase = new Map();
const CustomDatabase = new Map();

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


let currentData = PublicDatabase.get("Animals");
let sortDirection = 1;

// document.querySelector('#lstparameters option:checked').parentElement.label

function selectTable(tableID) {
  let dataKey = document.querySelector('#displaySet option:checked').value;
  let data = [];
  if (document.querySelector('#displaySet option:checked').parentElement.label === "Public Sets") {
    data = PublicDatabase.get(dataKey);
  }
  else {
    data = CustomDatabase.get(dataKey);
  }
  table(tableID, dataKey, data);
}

function table(tableID, dataKey, data) {

  if (!!data && data.length > 1) {
    currentData = data;
    const tableElement = generateTable(dataKey, data);

    const output = document.getElementById(tableID);

    removeAllChildNodes(output);
    output.appendChild(tableElement);
  } else {
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

//window.onload = setOptions;