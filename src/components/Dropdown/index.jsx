import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocalStorage } from '@utils/hooks/useLocalStorage';
import './Dropdown.scss';

export const Dropdown = ({ data, label, setColumn }) => {
  const getLabelById = id => data.find(item => item.columnId === id).name;

  const [selectedId, setSelectedId] = useState(data[0].columnId);

  const pickOption = id => {
    setSelectedId(id);
    setShowDrop(false)
  };

  const getTransition = i => {
    if (showDrop) {
      return { transition: `all .4s ${i * 240}ms linear` };
    }
    return { transition: `all .4s ${(data.length - i) * 240}ms linear` };
  };

  const getDefaultValue = () => {
    const value = data.find(column => column.columnId === selectedId).name;
    return value ? value : 'text';
  };

  useEffect(() => {
    const status = {
      columnId: selectedId,
      status: data.find(item => item.columnId === selectedId).name
    };
    setColumn(status);
  }, [selectedId]);

  const [showDrop, setShowDrop] = React.useState(false);
  const clickOnDropdown = e => {
    // stopPropagation(e);
    setShowDrop(prev => !prev);
  };

  return (
    <label className='dropdown'>
      <select className='dropdown__select' defaultValue={getDefaultValue}>
        {data.map(item => (
          <option key={item.columnId} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <span className='dropdown__label'>{label}</span>

      <div className='dropdown__fake-select' aria-hidden>
        <span className='dropdown__fake-select__picker' onClick={clickOnDropdown}>
          {getLabelById(selectedId)}
        </span>
        <ul className='dropdown__fake-select__options'>
          {data.map((option, index) => (
            <li
              className={`dropdown__fake-select__option option-${index} ${showDrop && 'open'}`}
              style={getTransition(index)}
              onClick={() => pickOption(option.columnId)}
              key={option.columnId}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </label>
  );
};
