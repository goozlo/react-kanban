import { createSlice } from '@reduxjs/toolkit';

// todo подумать что сделать с no-undef у локал сторадж
/* eslint-disable no-undef */

const initialState = {
  mode: !!JSON.parse(localStorage.getItem('mode')),
};

// mode.true === light
// mode.false === dark

export const modeSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem('mode', state.mode);
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
