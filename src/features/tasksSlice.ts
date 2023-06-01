import { TaskState, Todo } from '@/interfaces/todo'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: TaskState = {
  todos: [],
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTodo: (state: TaskState, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state: TaskState, action: PayloadAction<Todo>) => {
      const id = action.payload.id
      console.log(id)
    },
  },
})

export const { addTodo, removeTodo } = taskSlice.actions
export default taskSlice.reducer
