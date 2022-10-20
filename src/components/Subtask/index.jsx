/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import '../../styles/@mixins.scss';
import '../../styles/@variables.scss';
import '../../modals/CreateTask/CreateTask.scss';

const Subtask = ({ placeholder, i }) => {
  const handleInput = (e) => {
    e.target.value = '';
  };

  return (
    <div className="task-form__subtask-frame">
      <input 
        onInput={handleInput}
        className='task-form__subtask'
        placeholder={placeholder}
        type='text'
        name={`subtask ${i}`}
      /> 
      <button className="task-form__subtask-btn">
        <div className="task-form__subtask-btn-picture" />
      </button>
    </div>
  );
};

export default Subtask;
