'use client'

import { newAreaStore } from '@/store/habitStore'
import { Globe } from 'lucide-react'
import Link from 'next/link'

const FilterHabit = () => {
  const { areas } = newAreaStore()
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={`/dashboard?area=all`}
        className="border border-primary flex gap-2 px-2 py-1 rounded-sm hover:bg-primary"
      >
        <Globe />
        Wszystko
      </Link>
      {areas.map((area) => (
        <Link
          href={`/dashboard?area=${area.name} `}
          key={area.id}
          className="border border-primary flex gap-2 px-2 py-1 rounded-sm hover:bg-primary"
        >
          <Globe />
          {area.name}
        </Link>
      ))}
    </div>
  )
}

export default FilterHabit
