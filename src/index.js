import React from 'react';
import ReactDOM from 'react-dom';


// react convention https://github.com/airbnb/javascript/tree/master/react#naming
import Heading1 from "./components/Heading";
import UnorderedList from "./components/UnorderedList";
ReactDOM.render(
  <div>
    <Heading1 />
    <UnorderedList />
    <UnorderedList />
  </div>,
  document.getElementById("root")
);