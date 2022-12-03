"use strict";

const card = document.querySelectorAll(".card");

const randomNum = function () {
  const number = Math.trunc(Math.random() * 18) + 1;
  return number;
  console.log(number);
};

randomNum();

// fetching data using Rick and Morty API
const updateCards = async function () {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${randomNum()}`
  );
  const data = await res.json();
  console.log(data);

  const markup = `
  <h2>Name: ${data.name}</h2>
  <h2>Status: ${data.status}</h2>
  <h2>Species: ${data.species}</h2>
  <h2>Gender: ${data.gender}</h2>
  <img src = "${data.image}">
  `;

  for (let i = 0; i < card.length; i++) {
    card[i].textContent = "";
    card[i].insertAdjacentHTML("afterbegin", markup);
  }
};

updateCards();
