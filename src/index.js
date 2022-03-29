//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const myName = "Jesse Meirink";
const currentYear = /\d{4}/.exec(Date())[0];

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR. Current year is added dynamically
ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root")
);
