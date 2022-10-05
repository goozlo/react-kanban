import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mode: true,
}

//mode.true === light
//mode.false === dark

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        changeMode: (state) => {
            state.mode = !state.mode
        }
    },
})

export const {changeMode} = modeSlice.actions

export default modeSlice.reducer
