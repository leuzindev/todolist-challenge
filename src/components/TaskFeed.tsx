'use client'

import { useSelector } from 'react-redux'
import { Card } from './Card'
import EmptyFeed from './EmptyFeed'
import HeaderFeed from './HeaderFeed'

export default function TaskFeed() {
  const todos = useSelector((state: any) => state.task.todos)

  return (
    <section className="mt-14 w-full space-y-8">
      <HeaderFeed />
      <div className="min-h-0 space-y-3 rounded-lg border-t-2 border-gray-400">
        {todos.map((todo: any) => (
          <Card id={todo.id} description={todo.description} key={todo.id} />
        ))}

        {todos.length < 1 && <EmptyFeed />}
      </div>
    </section>
  )
}
