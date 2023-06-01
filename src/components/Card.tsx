'use client'

import Checkbox from './Checkbox'

import { Trash2 } from 'lucide-react'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { completeTask, removeTodo } from '@/features/tasksSlice'

interface CardProps {
  id?: string
  description?: string
}

export function Card({ id, description }: CardProps) {
  const [taskCompleted, setTaskCompleted] = useState(false)
  const dispatch = useDispatch()

  function handleDeleteTodo() {
    dispatch(removeTodo(id))
  }
  function handleCompleteTodo() {
    completeTask(id)
    setTaskCompleted(taskCompleted !== true)
  }

  return (
    <div className="flex min-h-[72px] items-center justify-center rounded-lg bg-gray-500">
      <div className="flex h-20 w-[5%] items-center justify-end">
        <span onClick={handleCompleteTodo}>
          <Checkbox />
        </span>
      </div>
      <section className="min-h-20 w-[90%]  p-4">
        {taskCompleted ? (
          <p className="text-body text-sm font-medium text-gray-100 line-through">
            {description}
          </p>
        ) : (
          <p className="text-body text-sm font-medium text-gray-100">
            {description}
          </p>
        )}
      </section>
      <div className="flex h-20 w-[5%] items-center justify-start ">
        <Trash2
          className="cursor-pointer text-gray-300 transition-colors hover:text-danger"
          onClick={handleDeleteTodo}
        />
      </div>
    </div>
  )
}
