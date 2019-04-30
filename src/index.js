import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ToDoApp from "./ToDoApp";


var destination = document.querySelector("#container");

ReactDOM.render(
  <div className="notePad">
  <div className="binders">
   <ul>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
     <li><img src="https://s.cdpn.io/39936/spiral.png" alt="binder" /></li>
   </ul>
   </div>
    <ToDoApp/>
  </div>,
  destination
);
