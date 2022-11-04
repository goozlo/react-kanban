import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../store/slices/modalSlice';
import { setActiveTask } from '../../store/slices/activeTask';
import './task.scss';

const Task = ({ data, setCurrentTask, setNewColumn, columnId, handleDropTask }) => {
  const dispatch = useDispatch();

  // по айди понятно какую таску взяли/тыкнули/переносят и тд
  const { title, description, status, subtasks, checklist = '3 of 3 subtasks', id } = data;
  const [complitedSubtasks, setComplitedSubtasks] = useState(0);

  // DragAndDrop Логика Drag and Drop
  const dragStartHandler = (e, task) => {
    setCurrentTask(task);
  };
  const dragLeaveHandler = e => {
    e.target.style.opacity = '100%';
  };
  const dragEndHandler = e => {
    e.target.style.opacity = '100%';
    handleDropTask();
  };
  const dragOverHandler = e => {
    e.preventDefault();
    if (e.target.className === 'task') {
      e.target.style.opacity = '30%';
    }
  };
  const dropHandler = (e, task, colId) => {
    e.preventDefault();
    e.target.style.opacity = '100%';
    setNewColumn(colId);
  };

  const handleOnTaskClick = task => {
    dispatch(setActiveTask(task));
    dispatch(showModal('EditTask'));
  };

  // Считает количество выполненных subtasks
  useEffect(() => {
    let count = 0;
    subtasks.forEach(subtask => (subtask.done === true ? (count = count + 1) : ''));
    setComplitedSubtasks(count);
  }, [subtasks]);

  return (
    <div
      draggable='true'
      className='task'
      onDragStart={e => dragStartHandler(e, data)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragEnd={e => dragEndHandler(e)}
      onDragOver={e => dragOverHandler(e)}
      onDrop={e => dropHandler(e, data, columnId)}
      onClick={() => handleOnTaskClick(data)}
    >
      <p className={'task__title'}>{title}</p>
      {subtasks.length === 0 ? (
        <p className={'task__subscribe'}>Subtasks weren't set</p>
      ) : (
        <p className={'task__subscribe'}>{`${complitedSubtasks} of ${subtasks.length} subtasks`}</p>
      )}
    </div>
  );
};

export default Task;
