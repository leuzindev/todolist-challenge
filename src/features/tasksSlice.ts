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
      const id = action.payload
      const index = state.todos.findIndex((todo: any) => todo.id === id)
      if (index !== -1) {
        state.todos.splice(index, 1)
      }
    },
    completeTask: (state: TaskState, action: PayloadAction<Todo>) => {
      const id = action.payload
      const index = state.todos.findIndex((todo: any) => todo.id === id)
    },
  },
})

export const { addTodo, removeTodo, completeTask } = taskSlice.actions
export default taskSlice.reducer
