import React from 'react';
import {Dropdown} from '@components/Dropdown';
import {EditMenu} from '@components/EditMenu';
import {AgreementList} from './AgreementList';
import './EditTask.scss';

const TEMP_DATA = {
  title: 'Research pricing points of various competitors and trial different business',
  body: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
  agreements: [
    'Research competitor pricing and business models',
    'Outline a business model that works for our solution',
    'Talk to potential customers about our proposed solution and ask for fair price expectancy',
  ],
  select: {
    label: 'Current Status',
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
      // {
      //   id: 3,
      //   label: 'Done',
      //   value: 'Done',
      // },
      // {
      //   id: 4,
      //   label: 'Done',
      //   value: 'Done',
      // },
      // {
      //   id: 5,
      //   label: 'Done',
      //   value: 'Done',
      // },
    ],
  },
};

const TEMP_DATA_FOR_POPUP = [
  {
    label: 'Edit Task',
    color: '#828FA3',
  },
  {
    label: 'Delete Task',
    color: '#EA5555',
  },
];

export const EditTask = () => (
    <div className="edit-task">
      <div className="edit-task__wrapper">
        <h3 className="edit-task__title">{TEMP_DATA.title}</h3>
        <EditMenu options={TEMP_DATA_FOR_POPUP} width="200px"/>
      </div>
      <p className="edit-task__body">{TEMP_DATA.body}</p>
      <AgreementList agreements={TEMP_DATA.agreements}/>
      <Dropdown data={TEMP_DATA.select}/>
    </div>
);
