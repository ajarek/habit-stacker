'use client'
import { Button } from '@/components/ui/button'
import { newAreaStore } from '@/store/habitStore'
import {
    Globe,
    Handshake,
    Plus,
    CircleArrowLeft,
    CircleArrowRight,
  } from 'lucide-react'

const FilterHabit = () => {
    const { areas } = newAreaStore()
  return (
    <div className="flex gap-2">
    <Button variant={'outline'} className="flex gap-2">
      <Globe />
      Wszystko
    </Button>
    {areas.map((area) => (
      <Button variant={'outline'} key={area.id} className="flex gap-2">
        <Globe />
        {area.name}
      </Button>
    ))}
  </div>
  )
}

export default FilterHabit