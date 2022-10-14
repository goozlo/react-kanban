import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isHidden: true
}

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        hideSideBar: (state) => {
            state.isHidden = !state.isHidden;
        }
    }
})

export const { hideSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;