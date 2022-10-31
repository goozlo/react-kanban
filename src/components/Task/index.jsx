import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '@store/slices/modalSlice';
import './task.scss';

const Task = ({ data }) => {
  // по айди понятно какую таску взяли/тыкнули/переносят и тд
  const { title, description, status, subtasks, checklist = '3 of 3 subtasks', id, columnId } = data;
  const [complitedSubtasks, setComplitedSubtasks] = useState(0);

  const dispatch = useDispatch();

  const [dragTask, setDragTask] = useState();
  console.log(dragTask, '!!!');

  // Логика Drag and Drop
  const dragStartHandler = (e, task) => {
    console.log('drag', task);
    setDragTask(task);
  };
  const dragLeaveHandler = e => {
    e.target.style.background = 'white';
  };
  const dragEndHandler = e => {
    e.target.style.background = 'white';
  };
  const dragOverHandler = e => {
    e.preventDefault();
    e.target.style.background = 'lightgrey';
  };
  const dropHandler = (e, task) => {
    e.preventDefault();
    console.log('drop', task);
    console.log('drop', columnId);
    console.log('drop 111', dragTask);
    
    e.target.style.background = 'white';
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
      onDrop={e => dropHandler(e, data)}
    >
      <p className={'task__title'}>{title}</p>
      <p className={'task__subscribe'}>{`${complitedSubtasks} of ${subtasks.length} subtasks`}</p>
    </div>
  );
};

export default Task;
