import {configureStore} from '@reduxjs/toolkit'
import modeReducer from './slices/modeSlice'
import modalReducer from './slices/modalSlice'

const store = configureStore({
  reducer: {
    mode: modeReducer,
    modal: modalReducer
  }
})

export default store
