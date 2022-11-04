import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stopPropagation } from '@utils/hooks/usePropagination';
import Dots from '@assets/images/dots.svg';
import { Dropdown } from '@components/Dropdown';
import { EditMenu } from '@components/EditMenu';
import { showModal } from '../../store/slices/modalSlice';
import { mainApi } from '../../utils/api/mainApi';
import { AgreementList } from './AgreementList';
import './EditTask.scss';
import { updateTask } from '../../store/slices/tasksSlice';

export const EditTask = () => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = React.useState(false);
  const [showDrop, setShowDrop] = React.useState(false);
  const isVisibleModal = useSelector(state => state.modal.isVisible);
  const activeTask = useSelector(state => state.activeTask.activeTask);
  const [taskColumn, setTaskColumn] = React.useState({});
  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);
  const boards = useSelector(state => state.boards.boards);
  const activeBoard = boards.find(board => board.id === activeBoardId);

  const TEMP_DATA_FOR_POPUP = [
    {
      label: 'Edit Task',
      color: '#828FA3',
      action: () => dispatch(showModal('CreateTask'))
    },
    {
      label: 'Delete Task',
      color: '#EA5555',
      action: () => dispatch(showModal('Remove'))
    }
  ];

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

  // При изменении колнки мы проверяем совпадает ли новая колонка с текущей колонкой
  // Если колонки изменилась, то изменяем таску (обновляем в ней колонку) и отправляем на бэк
  React.useEffect(() => {
    // Проверяем объект на пустоту
    if (!taskColumn.columnId) {
      return;
    }
    // Проверяем изменилась ли колонка или нет
    if (taskColumn.columnId !== activeTask.columnId) {
      const newTask = { ...activeTask, status: taskColumn.status, columnId: taskColumn.columnId };
      // Отправляем на бэк новую таску (обновляем)
      mainApi
        .updateTask(newTask)
        .then(res => dispatch(updateTask(res)))
        .catch(err => console.log(err));
    }
  }, [taskColumn]);

  return (
    <div className='edit-task' onClick={clickOnModal}>
      <div className='edit-task__wrapper'>
        <h3 className='edit-task__title'>{activeTask.title}</h3>
        <div className='action-menu'>
          <img className='action-menu__dots' onClick={clickOnEditMenu} src={Dots} alt='action-menu' />
          <EditMenu options={TEMP_DATA_FOR_POPUP} width='200px' show={showEdit} setShowEdit={setShowEdit} />
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
