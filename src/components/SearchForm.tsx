'use client'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { v4 as uuidv4 } from 'uuid'

import { PlusCircle } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { addTodo } from '@/features/tasksSlice'

const searchFormSchema = z.object({
  description: z
    .string()
    .min(10, { message: 'A descrição precisa no mínimo de 10 caracteres' }),
})

type SearchFormData = z.infer<typeof searchFormSchema>

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })
  const dispatch = useDispatch()

  function handleSearch(data: SearchFormData) {
    dispatch(
      addTodo({
        id: uuidv4(),
        description: data.description,
        isCompleted: false,
      }),
    )
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="-mt-7 mb-2 flex h-[54px] items-center justify-center gap-2"
      >
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="h-full w-full rounded-lg bg-gray-500 pl-4 pr-4 font-medium text-gray-100 placeholder:text-[16px]"
          {...register('description')}
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex h-full w-[100px] items-center justify-center gap-2 rounded-lg bg-blue-dark text-[14px]  font-bold text-gray-100 transition-colors placeholder:text-gray-300 hover:bg-blue"
        >
          Criar
          <PlusCircle className="text-gray-100" size={16} />
        </button>
      </form>
      {errors && (
        <span className="text-danger">{errors.description?.message}</span>
      )}
    </>
  )
}
