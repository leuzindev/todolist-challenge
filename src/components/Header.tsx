import Image from 'next/image'

import logoImg from '../assets/todoLogo.svg'

export function Header() {
  return (
    <header className="flex h-[200px] items-center justify-center bg-gray-700">
      <Image
        src={logoImg}
        alt="Logo de um foguete com a palavra todo do lado direito"
      />
    </header>
  )
}
