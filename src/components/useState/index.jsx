/* eslint-disable react/button-has-type */
import React from 'react';

const Component = () => {
  const [state, setState] = React.useState('Mama mila ramu');

  const removeLastSymbol = () => {
    const newState = state.slice(0, -1);
    console.log(newState);
    setState(newState);
  }

  return (
    <div>
      <p>{state}</p>
      <button onClick={removeLastSymbol}> click </button>
    </div>
  );
}

export default Component;
