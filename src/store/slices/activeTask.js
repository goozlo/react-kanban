import { createSlice } from '@reduxjs/toolkit';

export const activeTaskSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'activeTask',
  initialState: {
    activeTask: {}
  },
  reducers: {
    setActiveTask: (state, action) => {
        console.log(action.payload);
      state.activeTask = action.payload;
    }
  }
  /* eslint-enable no-param-reassign */
});

export const { setActiveTask } = activeTaskSlice.actions;

export default activeTaskSlice.reducer;
