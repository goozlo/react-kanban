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
        <h3>{`${column.name.toUpperCase()} ( ${properTasks.length} )`}</h3>
        {properTasks.map(task => <Task key={task.id} data={task}/>)}
      </div>
  )
}


export default TaskColumn;
