"use strict";

import markup from "url:./script.js";

const card = document.querySelector(".card");
const cards = document.querySelectorAll(".card");

const clearContent = function () {
  card.innerHTML = "";
};

const randomNum = function () {
  const number = Math.trunc(Math.random() * 18) + 1;
  return number;
};

// fetching data using Rick and Morty API
const updateCards = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();

  export const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img class ="img" src = "${data.image}">
  `;

  card.insertAdjacentHTML("afterbegin", markup);
};

for (let i = 0; i < cards.length; i++) {
  if (cards[i].classList.contains("img")) {
    console.log("hey");
    clearContent();
    card.classList.add("img");
    updateCards(cards[i]);
  }
}
