import React from 'react';
import ReactDOM from 'react-dom';

// pi name not matters but double and TriplePi name matters cause it's not default export
import pi, { doublePi, triplePi } from "./math";
import * as pie from "./math";
// don't use wildcard(*) so much, It will import all things which not nessecary
ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
    <li>{pie.default}</li>
    <li>{pie.doublePi()}</li>
    <li>{pie.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);