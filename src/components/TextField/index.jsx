import React, { useEffect, useState } from 'react';
import './TextField.scss';

export const TextField = ({
  label,
  type,
  placeholder,
  width,
  setResult = Function.prototype,
  name = '',
  initialValue = '',
  setIsDisabled = Function.prototype,
}) => {
  const [value, setValue] = useState(initialValue);
  const [inputName, setInputName] = useState(name);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (value.length == 0) {
      setError(true);
    } else setError(false)
  }, [value]);

  const onChangeInput = e => {
    e.preventDefault();
    setInputName(e.target.name);
    setValue(e.target.value);
  };

  useEffect(() => {
    setResult(state => ({ ...state, [inputName]: value }));
    if (value.length == 0) {
      setIsDisabled(true)}
      else setIsDisabled(false)
    
  }, [value]);

  return (
    <label className={`input ${error && 'error'}`}>
      <span className='input__label hidden'>{label}</span>
      <input
        className='input__field'
        style={{ width }}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChangeInput}
      />
    </label>
  );
};
