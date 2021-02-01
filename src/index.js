import React from 'react';
import ReactDOM from 'react-dom';

const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    {/* html global attrbutes for js need to be camel case */}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="food-img" alt="bacon" src={img + "?grayscale"} />
      <img className="food-img" alt="robot" src={img+ "?grayscale"} />
      <img className="food-img" alt="robot" src={img+ "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
