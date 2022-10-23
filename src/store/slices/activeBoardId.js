import { createSlice } from '@reduxjs/toolkit';

export const activeBoardIdSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'activeBoardId',
  initialState: {
    activeBoardId: 0
  },
  reducers: {
    setActiveBoardId: (state, action) => {
      state.activeBoardId = action.payload;
    }
  }
  /* eslint-enable no-param-reassign */
});

export const { setActiveBoardId } = activeBoardIdSlice.actions;

export default activeBoardIdSlice.reducer;
