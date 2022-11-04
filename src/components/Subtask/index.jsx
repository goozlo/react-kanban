/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import '../../styles/@mixins.scss';
import '../../styles/@variables.scss';
import '../../modals/CreateTask/CreateTask.scss';
import './Subtask.scss';

const Subtask = ({ placeholder, id, setSubTs, subTs }) => {
  const handleInput = e => {
    const newSubTs = {
      name: e.target.value,
      done: false,
      id
    };

    if (subTs.find(item => item.id === newSubTs.id)) {
      setSubTs(subTs.map(item => (item.id === newSubTs.id ? (item = newSubTs) : item)));
    } else {
      setSubTs([...subTs, newSubTs]);
    }
  };

  function handleRemoveSubTask(e) {
    e.preventDefault();
  }
  return (
    <div className='task-form__subtask-frame' key={id}>
      <input
        className='task-form__subtask'
        placeholder={placeholder}
        type='text'
        name={`subtask ${id}`}
        onChange={handleInput}
      />
      <button className='task-form__subtask-btn' onClick={handleRemoveSubTask}>
        <div className='task-form__subtask-btn-picture' />
      </button>
    </div>
  );
};

export default Subtask;
