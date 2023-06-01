export interface Todo {
  id: string | undefined
  description: string
  isCompleted: boolean
}

export interface TaskState {
  todos: Todo[]
}
