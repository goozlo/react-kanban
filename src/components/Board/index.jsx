import './Board.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../../store/slices/modalSlice';
import { updateTask } from '../../store/slices/tasksSlice';
import TaskColumn from '../TaskColumn/index';
import { mainApi } from '../../utils/api/mainApi';

const Board = () => {
  // Для реализации drag and drop устанавливаем стейт новой
  // колонки куда переместили таску и саму таску, которую перемещаем
  // стейты устанавливаются на уровне компонента Task
  const [newColumn, setNewColumn] = useState('');
  const [currentTask, setCurrentTask] = useState({});

  const dispatch = useDispatch();

  // Достаем список досок из Store
  const boards = useSelector(state => state.boards.boards);

  // Достаем аактивную доску из Store
  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);

  // Выбираем объект доски согласно id активной доски
  const activeBoard = boards.find(board => board.id === activeBoardId);
  const columns = activeBoard ? activeBoard.columns : [];

  const handleDropColumn = () => {
    const droppedTask = { ...currentTask, columnId: newColumn };
    mainApi
      .updateTask(droppedTask)
      .then(res => dispatch(updateTask(res)))
      .catch(err => console.log(err));
  };

  return (
    <div className={`board ${columns.length !== 0 ? 'board_type_with-columns' : ''}`}>
      <div className={`board__container ${columns.length !== 0 ? 'board__container_type_with-columns' : ''}`}>
        {columns.length === 0 ? (
          <>
            <p className='board__title'>This board is empty. Create a new column to get started.</p>
            <button className='board__new-column' onClick={() => dispatch(showModal('AddColumn'))}>
              + Add New Column
            </button>
          </>
        ) : (
          <>
            {columns.map(column => (
              <TaskColumn
                key={column.columnId}
                column={column}
                setCurrentTask={setCurrentTask}
                setNewColumn={setNewColumn}
                newColumn={newColumn}
                currentTask={currentTask}
                handleDropColumn={handleDropColumn}
              />
            ))}
            <div className='board__last-column'>
              <button className='board__add-column' onClick={() => dispatch(showModal('AddColumn'))}>
                + New Column
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
