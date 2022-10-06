import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isVisible: false
};

export const modalSlice = createSlice({
    /* eslint-disable no-param-reassign */
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.isVisible = !state.isVisible;
        },
    },
    /* eslint-enable no-param-reassign */
});

export const {showModal} = modalSlice.actions;

export default modalSlice.reducer;
