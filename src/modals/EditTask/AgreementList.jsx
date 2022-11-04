import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../store/slices/tasksSlice';
import { mainApi } from '../../utils/api/mainApi';
import { Checkbox } from '../../components/Checkbox';
import './AgreementList.scss';

export const AgreementList = ({ agreements, task }) => {
  const dispatch = useDispatch();
  const [subTasks, setSubTasks] = useState(agreements);
  const initialState = subTasks.filter(item => item.done === true).length;

  // Обрабатываем отметку чек бокса
  const handleCheckboxClick = subTask => {
    // Обновляем состояние субтасок
    const newSubTasks = subTasks.map(item => (item.id === subTask.id ? (item = subTask) : item));
    // Обновляем стейт субтасок
    setSubTasks(newSubTasks);
    // Обновляем таску
    const newTask = { ...task, subtasks: newSubTasks };

    // Обновляем таску на бэке
    mainApi
      .updateTask(newTask)
      // Сохраняем новую таску в Store
      .then(res => dispatch(updateTask(res)))
      .catch(err => console.log(err));
  };

  return (
    <>
      {subTasks.length === 0 ? (
        <span className='agreement-list'>Subtasks weren't set</span>
      ) : (
        <span className='agreement-list'>
          Subtasks ({initialState} of {subTasks.length})
        </span>
      )}

      {subTasks.map((agreement, index) => (
        <Checkbox
          key={index}
          toggle={handleCheckboxClick}
          label={agreement.name}
          isDone={agreement.done}
          subTask={agreement}
        />
      ))}
    </>
  );
};
