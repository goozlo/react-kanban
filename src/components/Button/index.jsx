/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.scss';

const Button = ({
  className = 'button_primaryL', label = '+ Add New Column', width = '174px'
}) => (
  <button className={className} style={{ width }}>
    {label}
  </button>
);

export default Button;
