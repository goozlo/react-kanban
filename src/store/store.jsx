import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import sideBarReducer from './slices/sideBarSlice';
import boardsReducer from './slices/boardsSlice';
import tasksReducer from './slices/tasksSlice';
import activeBoardIdReducer from './slices/activeBoardId';
import activeTaskReducer from './slices/activeTask';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    sideBar: sideBarReducer,
    boards: boardsReducer,
    tasks: tasksReducer,
    activeBoardId: activeBoardIdReducer,
    activeTask: activeTaskReducer
  }
});

export default store;
