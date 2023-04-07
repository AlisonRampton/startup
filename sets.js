"use strict";

const Database = new Map();

Database.set("Animals", [
  "Cat",
  "Fish",
  "Rabbit",
  "Penguin",
  "Squirrel",
  "Capybara",
  "Parrot"
]);

Database.set("Locations", [
  "Farm",
  "Bank",
  "National Park",
  "Airplane",
  "Restaurant",
  "University",
  "Swimming Pool"
]);

Database.set("Superheroes", [
  "Spiderman",
  "Superman",
  "Batman",
  "Iron Man",
  "Captain America",
  "Squirrel Girl",
  "Doctor Strange",
  "Hawkeye"
]);


let currentData = Database.get("Animals");
let sortDirection = 1;

// document.querySelector('#lstparameters option:checked').parentElement.label

function table() {
  let dataKey = document.querySelector('#displaySet option:checked').value;
  let data = Database.get(dataKey);
  if (!!data && data.length > 1) {
    currentData = data;
    const tableElement = generateTable(dataKey, data);

    const output = document.getElementById("set-table");

    removeAllChildNodes(output);
    output.appendChild(tableElement);
  } else {
    outputData("invalid input", dataKey);
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

function outputData(title, data) {
  const output = document.getElementById("set-table");
  output.innerHTML = `<h3>${title}</h3><pre>${JSON.stringify(
    data,
    null,
    2
  )}</pre>`;
}
