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
  setIsDisabled = Function.prototype
}) => {
  const [value, setValue] = useState(initialValue);
  const [inputName, setInputName] = useState(name);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (value.length === 0) {
      setError(true);
    } else setError(false);
  }, [value]);

  const onChangeInput = e => {
    e.preventDefault();
    setInputName(e.target.name);
    setValue(e.target.value);
  };

  useEffect(() => {
    setResult(state => {
      // Каждый элемент стейта проверяем на наличие такого же объекта с таким же ключом
      const data = state;
      const s = data.find(item => Object.keys(item)[0] === inputName);
      // Если в массиве уже есть объект с таким же ключом то меняем у этого ключа значение
      // если нет то мы добавляем новый объект с новым занчением
      if (!s) {
        return [...state, { [inputName]: value }];
      } else {
        return data.map(item => (Object.keys(item)[0] === Object.keys(s)[0] ? { [inputName]: value } : item));
      }
    });

    if (value.length === 0) {
      setIsDisabled(true);
    } else setIsDisabled(false);
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
