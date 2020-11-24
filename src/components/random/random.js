import React from 'react';
import './random.css';

function Random(props) {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomisedValue = randomIntFromInterval(props.min, props.max);

  return (
    <div className="random">
      <h1>
        Random value between {props.min} and {props.max} => {randomisedValue}
      </h1>
    </div>
  );
}

export default Random;
