import { useState, useEffect } from 'react';
import Task from "@components/Task";
import './TaskColumn.scss';

const TaskColumn = ({ column, tasks }) => {
  const [properTasks, setProperTasks] = useState([]);
  
  // Колонка получает на вход массив со всеми тасками доски. Функция фильтрует таски для конкретной колонки
  useEffect(() => {
    const filteredTasks = tasks.filter(task => task.columnId === column.id);
    setProperTasks(filteredTasks);
  }, [column, tasks]);

  return (
      <div className='column'>
        <div className='column__header'>
          <div className='column__header-circle'></div>
          <h3 className='column__header-title'>{`${column.name.toUpperCase()} (${properTasks.length})`}</h3>
        </div>
        
        <div className="column__tasks-container">
           {properTasks.map(task => <Task key={task.id} data={task}/>)}
        </div>
      </div>
  )
}


export default TaskColumn;
