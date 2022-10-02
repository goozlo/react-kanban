import { configureStore } from '@reduxjs/toolkit'
import sliceExample from './slices/sliceExample'

const store = configureStore({
  reducer: {
    example: sliceExample
  },
})

export default store
