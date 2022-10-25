import React, { useEffect } from 'react';
import './TextField.scss';

export const TextField = ({ label, type, placeholder, width, setResult, name }) => {
  const [value, setValue] = React.useState('');
  const [inputName, setInputName] = React.useState('');
  const [error, setError] = React.useState(false);
  const ref = React.useRef(true);

  React.useEffect(() => {
    const firstRender = ref.current;
    // eslint-disable-next-line no-unused-expressions
    !firstRender && setError(!value.length);
    ref.current = false;
  }, [value]);

  const onChangeInput = e => {
    e.preventDefault();
    setInputName(e.target.name)
    setValue(e.target.value);
  };

  useEffect(() => {
    setResult(state => ({ ...state, [inputName]: value }));
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
