import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ToDoApp from "./ToDoApp";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div className="notePad">
    <ToDoApp/>
  </div>,
  destination
);
