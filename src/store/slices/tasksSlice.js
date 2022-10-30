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
    removeTask: (state, action) => {
      state.tasks.filter(task => task.id !== action.payload.task.id);
    }
  }
  /* eslint-enable no-param-reassign */
});

export const { addAllTasks, addNewTask } = tasksSlice.actions;

export default tasksSlice.reducer;
