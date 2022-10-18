import './Board.scss';
import TaskColumn from '../TaskColumn/index';
import { useState, useEffect } from 'react';

const Board = ({ columns = [], tasks = [] }) => {
  return (
    <div className='board'>
      <div className={`board__container ${columns.length !== 0 ? 'board__container_type_with-columns' : ''}`}>
        {columns.length === 0 ? (
          <>
            <p className='board__title'>This board is empty. Create a new column to get started.</p>
            <button className='board__new-column'>+ Add New Column</button>
          </>
        ) : (
          columns.map(column => <TaskColumn key={column.id} column={column} tasks={tasks} />)
        )}
      </div>
    </div>
  );
};

export default Board;
