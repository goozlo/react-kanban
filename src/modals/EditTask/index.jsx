import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stopPropagation } from '@utils/hooks/usePropagination';
import { EditMenu } from '@components/EditMenu';
import { Dropdown } from '@components/Dropdown';
import Dots from '@assets/images/dots.svg';
import { AgreementList } from './AgreementList';
import './EditTask.scss';
import { updateTask } from '../../store/slices/tasksSlice';

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
  const dispatch = useDispatch();
  const isVisibleModal = useSelector(state => state.modal.isVisible);
  const activeTask = useSelector(state => state.activeTask.activeTask);
  const [taskColumn, setTaskColumn] = React.useState({});
  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);
  const boards = useSelector(state => state.boards.boards);
  const activeBoard = boards.find(board => board.id === activeBoardId);
  console.log(taskColumn, '111');

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

  React.useEffect(() => {
    if (!taskColumn.columnId) {
      return;
    }
    if (taskColumn.columnId !== activeTask.columnId) {
      const newTask = { ...activeTask, status: taskColumn.status, columnId: taskColumn.columnId };
      dispatch(updateTask(newTask));
    }
  }, [taskColumn]);

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
      <Dropdown
        data={activeBoard.columns}
        clickToShow={clickOnDropdown}
        show={showDrop}
        taskColumnId={activeTask.columnId}
        setColumn={setTaskColumn}
      />
    </div>
  );
};
