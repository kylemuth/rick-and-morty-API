"use strict";

const getSomeData = async function () {
  const res = await fetch("https://swapi.dev/api/planets/1/");
  const data = await res.json();
  console.log(data);

  const markup = `
  <h2>Planet name: ${data.name}</h2>
  `;

  document.querySelector(".first-text").insertAdjacentHTML("beforeend", markup);
};

const addSelected = function () {
  document.querySelector(".btn").addEventListener("click", function () {
    document.querySelector(".episode1").classList.add("selected");
    console.log("hey");
    document.querySelector(".episode1class").style.scale = 1.3;
    console.log("hey");
  });
};

addSelected();
