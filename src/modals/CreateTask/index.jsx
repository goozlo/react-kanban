/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import '../../styles/@mixins.scss';
import '../../styles/@variables.scss'; 
import { stopPropagation } from '@utils/hooks/usePropagination';
import { Dropdown } from '@components/Dropdown';
import Button from '../../components/Button/index';
import Subtask from '../../components/Subtask';
import './CreateTask.scss';

const TEMP_DATA = {
  title: 'Research pricing points of various competitors and trial different business models',
  body: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
  agreements: [
    'Research competitor pricing and business models',
    'Outline a business model that works for our solution',
    'Talk to potential customers about our proposed solution and ask for fair price expectancy',
  ],
  select: {
    label: 'Status',
    options: [
      {
        id: 0,
        label: 'Todo',
        value: 'Todo',
      },
      {
        id: 1,
        label: 'Doing',
        value: 'Doing',
      },
      {
        id: 2,
        label: 'Done',
        value: 'Done',
      },
      {
        id: 3,
        label: 'Done',
        value: 'Done',
      },
      {
        id: 4,
        label: 'Done',
        value: 'Done',
      },
      {
        id: 5,
        label: 'Done',
        value: 'Done',
      },
    ],
  },
};

const CreateTask = ({ mainTitle = 'Add New Task' }) => {
  const [data, setData] = useState({
    title: '',
    description: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((oldData) => ({ ...oldData, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('sent form');
  };
  
  const addSubtask = (event) => {
    event.preventDefault();
    // const tasksWrapper = document.querySelector('.task-form__subtasks-wrapper');
    // const subtask = document.createElement(<Subtask placeholder='title1' i='1' />);
    console.log('add task');
    // tasksWrapper.append(subtask);
  };

  const [showDrop, setShowDrop] = React.useState(false);
  const clickOnDropdown = (e) => {
    stopPropagation(e);
    setShowDrop(prev => !prev);
  };
  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <h2 className='task-form__heading'>
        {mainTitle}
      </h2> 
      <label className='task-form__label-container'>
        <p className="task-form__label">
          Title
        </p>
        <input 
          className='task-form__input'
          placeholder='e.g. Take coffee break'
          type='text'
          name='title'
          onChange={handleChange}
          value={data.title} 

        />
      </label>
      <label className='task-form__label-container'>
        <p className="task-form__label">
          Description
        </p>
        <textarea 
          className='task-form__input task-form__description' 
          placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
          type='text'
          name='description'
          onChange={handleChange}
          value={data.description} 
        />
      </label>
      <div className='task-form__subtasks-wrapper'>
        <p className="task-form__subtasks-title">
          Subtasks
        </p>
        <Subtask placeholder='e.g. Make coffee' i='1' />
        <Subtask placeholder='e.g. Drink coffee & smile' i='2' />
        <Button fn={addSubtask} type='button' label='+ Add New Subtask' isLarge isSecondary isFullWidth isDestructive={false} />
      </div>
      <Dropdown data={TEMP_DATA.select} clickToShow={clickOnDropdown} show={showDrop} />
      <Button fnSumbit={handleSubmit} typre='submit' label='Create task' isLarge isSecondary={false} isFullWidth isDestructive={false} />
    </form>
  );
};

export default CreateTask;
