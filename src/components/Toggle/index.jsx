import React, { useState } from 'react';
import { useLocalStorage } from '@util/hooks/useLocalStorage';
import { useColor } from '@util/hooks/useColor';
import './Toggle.scss';

export const Toggle = () => {
  // mode.true === dark
  // mode.false === light

  const [mode, setMode] = useState(!useLocalStorage('mode'));

  const toggleMode = () => {
    setMode((prev) => !prev);
    localStorage.setItem('mode', JSON.stringify(mode));
  };

  React.useEffect(() => {
    useColor(mode);
  }, [mode]);

  return (
    <label className="toggle">
      <input className="toggle__input hidden" type="checkbox" onChange={() => toggleMode()} />
      <span className="toggle__fake-input" aria-hidden>
        <span className="toggle__circle" style={mode ? { left: 3 } : { left: 'calc(100% - 17px)' }} />
      </span>
    </label>
  );
};