'use client'

import Checkbox from './Checkbox'

import { Trash2 } from 'lucide-react'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { completeTask, removeTodo } from '@/features/tasksSlice'
import { Todo } from '@/interfaces/todo'

interface CardProps {
  id: Todo
  description?: string
}

export function Card({ id, description }: CardProps) {
  const [taskCompleted, setTaskCompleted] = useState(false)
  const dispatch = useDispatch()

  function handleDeleteTodo() {
    dispatch(removeTodo(id))
  }
  function handleCompleteTodo() {
    dispatch(completeTask(id))
    setTaskCompleted(taskCompleted !== true)
  }

  return (
    <div className="flex items-center justify-center rounded-lg bg-gray-500">
      <div className="flex h-full w-[5%] items-center justify-end lg:pl-7">
        <span onClick={handleCompleteTodo} className="rounded-lg">
          <Checkbox />
        </span>
      </div>
      <section className="flex-1 p-4">
        {taskCompleted ? (
          <p className="text-body text-sm font-semibold text-gray-100 line-through">
            {description}
          </p>
        ) : (
          <p className="text-body text-sm font-semibold text-gray-100">
            {description}
          </p>
        )}
      </section>
      <div className="flex h-full w-[5%] items-center justify-start lg:mr-3">
        <Trash2
          className="cursor-pointer text-gray-300 transition-colors hover:text-danger"
          onClick={handleDeleteTodo}
        />
      </div>
    </div>
  )
}
