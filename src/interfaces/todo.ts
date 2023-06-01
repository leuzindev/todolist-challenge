export interface Todo {
  id: string
  description: string
  isCompleted: boolean
}

export interface TaskState {
  todos: Todo[]
}
