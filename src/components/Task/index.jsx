import { useEffect, useState } from 'react';
import './task.scss';

const Task = ({ data, setCurrentTask, setNewColumn, columnId, handleDropTask }) => {
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

  // Считает количество выполненных subtasks
  useEffect(() => {
    let count = 0;
    subtasks.forEach(subtask => (subtask.isCompleted === true ? (count = count + 1) : ''));
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
    >
      <p className={'task__title'}>{title}</p>
      <p className={'task__subscribe'}>{`${complitedSubtasks} of ${subtasks.length} subtasks`}</p>
    </div>
  );
};

export default Task;
