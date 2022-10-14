import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import sideBarReducer from './slices/sideBarSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    sideBar: sideBarReducer
  }
});

export default store;
