import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
