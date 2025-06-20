import React, { useState } from 'react';

const Phone = () => {
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

   const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h2>My Phone is {brand}</h2>
      <p>it is a {color} {model} from {year}</p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Phone;
