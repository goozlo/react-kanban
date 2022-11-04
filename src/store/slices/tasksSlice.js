import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'task',
  initialState: {
    tasks: []
  },
  reducers: {
    addAllTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addNewTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map(task => task.id === action.payload.id ? task = action.payload : task);
    },
    removeTask: (state, action) => {
      state.tasks.filter(task => task.id !== action.payload.task.id);
    }
  }
  /* eslint-enable no-param-reassign */
});

export const { addAllTasks, addNewTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
