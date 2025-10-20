import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'

export const store = configureStore({
  reducer: {
    data: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch