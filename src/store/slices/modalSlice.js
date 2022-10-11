import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  type: 'none',
};

export const modalSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isVisible = !state.isVisible;
      state.type = action?.payload ?? 'none';
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
