import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

export const Checkbox = ({ label = "label wasn't provided", toggle, isDone, subTask }) => {
  const [checked, setChecked] = React.useState(isDone);

  const toggleCheckbox = () => {
    setChecked(prev => !prev);
    const subTs = { ...subTask, done: !isDone };
    toggle(subTs);
  };

  return (
    <label className='checkbox'>
      <input className='checkbox__input hidden' onChange={() => toggleCheckbox()} checked={checked} type='checkbox' />
      <span className='checkbox__fake-input' aria-hidden />
      <span className={`checkbox__label ${checked ? 'active' : ''}`.trim()}>{label}</span>
    </label>
  );
};

// при переносе на typescript удалить бибилотеку prop-types
Checkbox.propTypes = {
  label: PropTypes.string
};
