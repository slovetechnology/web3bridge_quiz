import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  question: {
    "type"?: string
    "difficulty"?: string
    "category"?: string
    "question"?: string
    "correct_answer"?: string
    "incorrect_answers"?: string[]
    "options"?: string[]
  }
}

const initialState: CounterState = {
  question: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dispatchQuestion: (state, action: PayloadAction<CounterState["question"]>) => {
      state.question = action.payload
    },
  },
})

export const { dispatchQuestion } = counterSlice.actions

export default counterSlice.reducer