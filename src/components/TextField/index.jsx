import React from 'react';
import './TextField.scss';

export const TextField = ({
 label, type, placeholder, width 
}) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const ref = React.useRef(true);

  React.useEffect(() => {
    const firstRender = ref.current;
    // eslint-disable-next-line no-unused-expressions
    !firstRender && setError(!value.length);
    ref.current = false;
  }, [value]);

  const onChangeInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <label className={`input ${error && 'error'}`}>
      <span className="input__label hidden">{label}</span>
      <input
        className="input__field"
        style={{ width }}
        value={value}
        onChange={onChangeInput}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};
