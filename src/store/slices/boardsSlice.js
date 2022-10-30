import { createSlice } from '@reduxjs/toolkit';

export const boardsSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'board',
  initialState: {
    boards: []
  },
  reducers: {
    addAllBoards: (state, action) => {
      state.boards = action.payload;
    },
    addNewBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    removeBoard: (state, action) => {
      state.boards = state.boards.filter(board => board.id !== action.payload);
    },
    updateBoard: (state, action) => {
      state.boards = state.boards.map(board => board.id === action.payload.id ? (board = action.payload) : board);
    }
  }
  /* eslint-enable no-param-reassign */
});

export const { addAllBoards, addNewBoard, removeBoard, updateBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
