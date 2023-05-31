import Image from 'next/image'

import empty from '../assets/empty.svg'

export default function EmptyFeed() {
  return (
    <div className="flex h-[250px] w-full flex-col items-center justify-center space-y-7">
      <Image
        src={empty}
        alt="Pranchea com um texto falando que o Feed esta vazio"
      />
      <div className="flex flex-col">
        <h1 className="text-[16px] font-bold text-gray-300">
          Você ainda não tem tarefas cadastradas
        </h1>
        <h3 className="text-[16px] font-medium text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </h3>
      </div>
    </div>
  )
}
