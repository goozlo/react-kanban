import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isHidden: false
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