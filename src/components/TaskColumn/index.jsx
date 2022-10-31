import { useSelector, useDispatch } from 'react-redux';
import Task from '@components/Task';
import { generateRandomColor } from '../../utils/randomColor';
import './TaskColumn.scss';
import { updateTask } from '../../store/slices/tasksSlice';

const TaskColumn = ({ column, setCurrentTask, setNewColumn, currentTask, newColumn, handleDropColumn }) => {
  const dispatch = useDispatch();

  // Достаем список тасок из Store
  const tasksStore = useSelector(state => state.tasks.tasks);

  // Отфильтровываем из всех тасок таски для конкретной колонки
  const tasks = tasksStore.filter(task => task.columnId === column.columnId);

  // Генерация случайного цвета для кружочка
  const color = generateRandomColor();

  // Обработка создания нового объекта при перетаскивании и сохранение его в Store
  const handleDropTask = () => {
    const droppedTask = { ...currentTask, columnId: newColumn };
    dispatch(updateTask(droppedTask));
  };

  const dragEndHandler = e => {
    e.preventDefault();
    handleDropColumn();
  };

  const dropTaskHandler = (e, id) => {
    e.preventDefault();
    setNewColumn(id);
  };

  const dropOverHandler = e => {
    const event = e;
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className='column'>
      <div className='column__header'>
        <div className='column__header-circle' style={{ backgroundColor: `${color}` }} />
        <h3 className='column__header-title'>{`${column.name.toUpperCase()} (${tasks.length})`}</h3>
      </div>

      <div
        className='column__tasks-container'
        onDragEnd={e => dragEndHandler(e)}
        onDragOver={e => dropOverHandler(e)}
        onDrop={e => dropTaskHandler(e, column.columnId)}
      >
        {tasks.map(task => (
          <Task
            key={task.id}
            data={task}
            columnId={column.columnId}
            setCurrentTask={setCurrentTask}
            setNewColumn={setNewColumn}
            handleDropTask={handleDropTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
