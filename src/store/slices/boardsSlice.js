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
      state.boards.push(action.payload.board);
    },
    removeBoard: (state, action) => {
      state.boards.filter(board => board.id !== action.payload.board.id);
    }
  }
  /* eslint-enable no-param-reassign */
});

export const { addAllBoards, addNewBoard, removeBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
