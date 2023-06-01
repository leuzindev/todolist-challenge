'use client'

import { Trash2 } from 'lucide-react'
import Checkbox from './Checkbox'

interface CardProps {
  id?: string
  description?: string
}

export function Card({ id, description }: CardProps) {
  return (
    <div className="flex min-h-[72px] items-center justify-center rounded-lg bg-gray-500">
      <div className="flex h-20 w-[5%] items-center justify-end">
        <Checkbox />
      </div>
      <section className="min-h-20 w-[90%]  p-4">
        <p className="text-body text-sm font-medium text-gray-100">
          {description}
        </p>
      </section>
      <div className="flex h-20 w-[5%] items-center justify-start ">
        <Trash2 className="cursor-pointer text-gray-300 transition-colors hover:text-danger" />
      </div>
    </div>
  )
}
