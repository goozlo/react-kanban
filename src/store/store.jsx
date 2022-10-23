import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import sideBarReducer from './slices/sideBarSlice';
import boardsReducer from './slices/boardsSlice';
import tasksReducer from './slices/tasksSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    sideBar: sideBarReducer,
    boards: boardsReducer,
    tasks: tasksReducer
  }
});

export default store;
