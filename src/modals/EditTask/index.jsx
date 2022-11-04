import React from 'react';
import { useSelector } from 'react-redux';
import { stopPropagation } from '@utils/hooks/usePropagination';
import { EditMenu } from '@components/EditMenu';
import { Dropdown } from '@components/Dropdown';
import Dots from '@assets/images/dots.svg';
import { AgreementList } from './AgreementList';
import './EditTask.scss';

const TEMP_DATA = {
  title: 'Research pricing points of various competitors and trial different business models',
  body: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
  agreements: [
    'Research competitor pricing and business models',
    'Outline a business model that works for our solution',
    'Talk to potential customers about our proposed solution and ask for fair price expectancy'
  ],
  select: {
    label: 'Current Status',
    options: [
      {
        id: 0,
        label: 'Todo',
        value: 'Todo'
      },
      {
        id: 1,
        label: 'Doing',
        value: 'Doing'
      },
      {
        id: 2,
        label: 'Done',
        value: 'Done'
      },
      {
        id: 3,
        label: 'Done',
        value: 'Done'
      },
      {
        id: 4,
        label: 'Done',
        value: 'Done'
      },
      {
        id: 5,
        label: 'Done',
        value: 'Done'
      }
    ]
  }
};

const TEMP_DATA_FOR_POPUP = [
  {
    label: 'Edit Task',
    color: '#828FA3'
  },
  {
    label: 'Delete Task',
    color: '#EA5555'
  }
];

export const EditTask = () => {
  const [showEdit, setShowEdit] = React.useState(false);
  const [showDrop, setShowDrop] = React.useState(false);
  const isVisibleModal = useSelector(state => state.modal.isVisible);
  const activeTask = useSelector(state => state.activeTask.activeTask);

  const clickOnModal = () => {
    setShowEdit(false);
    setShowDrop(false);
  };

  const clickOnEditMenu = e => {
    stopPropagation(e);
    setShowEdit(prev => !prev);
  };

  const clickOnDropdown = e => {
    stopPropagation(e);
    setShowDrop(prev => !prev);
  };

  React.useEffect(() => {
    setShowEdit(false);
    setShowDrop(false);
  }, [isVisibleModal]);

  return (
    <div className='edit-task' onClick={clickOnModal}>
      <div className='edit-task__wrapper'>
        <h3 className='edit-task__title'>{activeTask.title}</h3>
        <div className='action-menu'>
          <img className='action-menu__dots' onClick={clickOnEditMenu} src={Dots} alt='action-menu' />
          <EditMenu options={TEMP_DATA_FOR_POPUP} width='200px' show={showEdit} />
        </div>
      </div>
      <p className='edit-task__body'>{activeTask.description}</p>
      <AgreementList agreements={activeTask.subtasks} task={activeTask} />
      {/* <Dropdown data={TEMP_DATA.select} clickToShow={clickOnDropdown} show={showDrop} /> */}
    </div>
  );
};
