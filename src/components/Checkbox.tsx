/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-expressions, prettier/prettier
'use client'
import { Check } from 'lucide-react'

import { useState } from 'react'


export default function Checkbox() {
  const [checked, setChecked] = useState(false)
  return (
    <>
    {checked ? 
      <button 
        onClick={() => setChecked(false)}
        className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-purple-dark bg-purple-dark transition-colors"
      >
        <Check color='white' size={13} />
      </button>
      :
      <button 
        onClick={() => setChecked(true)}
        className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue transition-colors"
      ></button>
    }
    </>
  )
}
