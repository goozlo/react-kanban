/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.scss';

const Button = ({
  fn,
  label = 'button',
  isLarge = false,
  isSecondary = false,
  isFullWidth = false,
  isDestructive = false
}) => (
  <button
    className={[
      'button',
      isLarge ? 'large' : 'small',
      isSecondary ? 'secondary' : '',
      isDestructive ? 'destructive' : '',
      isFullWidth ? 'buttonFull' : ''
    ].join(' ')}
    onClick={fn}
  >
    {label}
  </button>
);

export default Button;
