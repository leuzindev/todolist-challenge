import { useSelector } from 'react-redux'

export default function HeaderFeed() {
  const todos = useSelector((state: any) => state.task.todos)

  return (
    <header className="flex justify-between">
      <div className="flex gap-2">
        <p className="tex-[14px] font-bold text-blue">Tarefas criadas</p>
        <p className="rounded-full bg-gray-400 pl-2 pr-2 font-bold text-gray-200">
          {todos.length}
        </p>
      </div>
      <div className="flex gap-2">
        <p className="tex-[14px] font-bold text-purple">Concluídas</p>
        <p className="rounded-full bg-gray-400 pl-2 pr-2 font-bold text-gray-200">
          2 de {todos.length}
        </p>
      </div>
    </header>
  )
}
