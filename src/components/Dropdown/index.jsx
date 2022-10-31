import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocalStorage } from '@utils/hooks/useLocalStorage';
import './Dropdown.scss';

export const Dropdown = ({ data, clickToShow, show, label, setColumn }) => {
  const getLabelById = id => data.find(item => item.columnId === id).name;

  const [selectedId, setSelectedId] = useState(data[0].columnId);

  const pickOption = id => {
    setSelectedId(id);
  };

  const getTransition = i => {
    if (show) {
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
        <span className='dropdown__fake-select__picker' onClick={clickToShow}>
          {getLabelById(selectedId)}
        </span>

        <ul className='dropdown__fake-select__options'>
          {data.map((option, index) => (
            <li
              className={`dropdown__fake-select__option option-${index} ${show && 'open'}`}
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
