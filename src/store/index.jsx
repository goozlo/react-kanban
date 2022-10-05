import {configureStore} from '@reduxjs/toolkit'
import modeReducer from './slices/modeSlice'

const store = configureStore({
  reducer: {
    mode: modeReducer
  }
})

export default store
