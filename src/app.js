/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let value = [
    "A",
    "J",
    "K",
    "Q",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ];

  let symbol = ["♦", "♥", "♠", "♣"];

  let cardHeader = document.getElementById("header");
  let cardSymbol = document.getElementById("symbol");
  let cardFooter = document.getElementById("footer");

  let x = Math.floor(Math.random() * value.length);
  let y = Math.floor(Math.random() * symbol.length);

  cardHeader.innerHTML = symbol[y];
  cardSymbol.innerHTML = value[x];
  cardFooter.innerHTML = symbol[y];

  if (symbol[y] == "♦" || symbol[y] == "♥") {
    cardHeader.style.color = "red";
    cardFooter.style.color = "red";
    cardSymbol.style.color = "red";
  }

  window.setInterval(function() {
    cardHeader.innerHTML = symbol[y];
    cardSymbol.innerHTML = value[x];
    cardFooter.innerHTML = symbol[y];
  }, 500);
};
