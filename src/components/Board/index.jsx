import './Board.scss';
import TaskColumn from '../TaskColumn/index';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Board = () => {
  // Достаем список досок из Store
  const boards = useSelector(state => state.boards.boards);

  // Достаем аактивную доску из Store
  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);

  // Выбираем объект доски согласно id активной доски
  const activeBoard = boards.find(board => board.id === activeBoardId);
  const columns = activeBoard ? activeBoard.columns : [];

  return (
    <div className={`board ${columns.length !== 0 ? 'board_type_with-columns' : ''}`}>
      <div className={`board__container ${columns.length !== 0 ? 'board__container_type_with-columns' : ''}`}>
        {columns.length === 0 ? (
          <>
            <p className='board__title'>This board is empty. Create a new column to get started.</p>
            <button className='board__new-column'>+ Add New Column</button>
          </>
        ) : (
          <>
            {columns.map(column => (
              <TaskColumn key={column.id} column={column} />
            ))}
            <div className='board__last-column'>
              <button className='board__add-column'>+ New Column</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
