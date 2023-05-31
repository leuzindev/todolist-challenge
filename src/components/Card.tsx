import { Trash2 } from 'lucide-react'
import Checkbox from './Checkbox'

export function Card() {
  return (
    <div className="flex min-h-[72px] rounded-lg bg-gray-500">
      <div>
        <Checkbox />
      </div>
      <section>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </section>
      <div>
        <Trash2 />
      </div>
    </div>
  )
}
