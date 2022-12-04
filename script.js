"use strict";

const card = document.querySelector(".card");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");
const card6 = document.querySelector(".card6");
const card7 = document.querySelector(".card7");
const card8 = document.querySelector(".card8");
const cards = document.querySelectorAll(".card");

const clearContent = function () {
  card.innerHTML = "";
};

const randomNum = function () {
  const number = Math.trunc(Math.random() * 18) + 1;
  return number;
};

// fetching data using Rick and Morty API
const updateCard1 = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card1.innerHTML = "";
  card1.insertAdjacentHTML("afterbegin", markup);
};

const updateCard2 = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card2.innerHTML = "";
  card2.insertAdjacentHTML("afterbegin", markup);
};

const updateCard3 = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card3.innerHTML = "";
  card3.insertAdjacentHTML("afterbegin", markup);
};

const updateCard4 = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card4.innerHTML = "";
  card4.insertAdjacentHTML("afterbegin", markup);
};

const updateCard5 = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card5.innerHTML = "";
  card5.insertAdjacentHTML("afterbegin", markup);
};
const updateCard6 = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card6.innerHTML = "";
  card6.insertAdjacentHTML("afterbegin", markup);
};

const updateCard7 = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card7.innerHTML = "";
  card7.insertAdjacentHTML("afterbegin", markup);
};

const updateCard8 = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card8.innerHTML = "";
  card8.insertAdjacentHTML("afterbegin", markup);
};

updateCard1();
updateCard2();
updateCard3();
updateCard4();
updateCard5();
updateCard6();
updateCard7();
updateCard8();
