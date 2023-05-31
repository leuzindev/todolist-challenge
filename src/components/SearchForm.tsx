import { PlusCircle } from 'lucide-react'

export default function SearchForm() {
  return (
    <div className="-mt-7 flex h-[54px] items-center justify-center gap-2">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="h-full w-full rounded-lg bg-gray-500 pl-4 pr-4 font-medium text-gray-100 placeholder:text-[16px]"
      />
      <button className="flex h-full w-[100px] items-center justify-center gap-2 rounded-lg bg-blue-dark text-[14px]  font-bold text-gray-100 transition-colors placeholder:text-gray-300 hover:bg-blue">
        Criar
        <PlusCircle className="text-gray-100" size={16} />
      </button>
    </div>
  )
}
