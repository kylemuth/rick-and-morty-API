"use strict";

let movieNumber;

// fetching data using SWAPI API
const getSomeData = async function () {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/1/`
  );
  const data = await res.json();
  console.log(data);

  const markup = `
  <h2>Planet name: ${data.name}</h2>
  `;

  document.querySelector(".first-text").insertAdjacentHTML("beforeend", markup);
};

getSomeData();

// using fetched data in order to display
// const addSelected = function () {
//   document.querySelector(".btn").addEventListener("click", function () {
//     document.querySelector(".episode1").classList.add("selected");
//     document.querySelector(".episode1class").style.scale = 1.3;
//   });
// };

// addSelected();

const determineSelected = function () {
  window.addEventListener("click", function (e) {
    // This logs to the console a "PointerEvent"
    console.log(e);

    const movieTitle = e.path[2].id;
    console.log(movieTitle);

    if (movieTitle === "episode1") {
      movieNumber = 1;
    } else return;
  });
};

determineSelected();
