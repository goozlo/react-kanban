import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Task from '@components/Task';
import './TaskColumn.scss';

const TaskColumn = ({ column }) => {
  // Достаем список тасок из Store
  const tasksStore = useSelector(state => state.tasks.tasks);

  // Отфильтровываем из всех тасок таски для конкретной колонки
  const tasks = tasksStore.filter(task => task.columnId === column.id);

  return (
    <div className='column'>
      <div className='column__header'>
        <div className='column__header-circle' />
        <h3 className='column__header-title'>{`${column.name.toUpperCase()} (${tasks.length})`}</h3>
      </div>

      <div className='column__tasks-container'>
        {tasks.map(task => (
          <Task key={task.id} data={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
