'use client'

import { newHabitStore } from '@/store/habitStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Globe,
  Handshake,
  Plus,
  CircleArrowLeft,
  CircleArrowRight,
  BookOpenText,
  EllipsisVertical,
} from 'lucide-react'

const ListHabits = () => {
    const {habits} = newHabitStore()
  return (
    <div className="w-full flex flex-col gap-4">
         <div className="flex  flex-col items-start  gap-2">
              <h2 className="text-xl  capitalize ">Poniedziałek</h2>
              <p>2024-07-12</p>
              <div className="flex gap-2">
                <Button size="icon">
                  <CircleArrowLeft />
                </Button>
                <Button size="icon">
                  <CircleArrowRight />
                </Button>
              </div>
            </div>
        { habits.length > 0 && habits.map((habit) => (
        
      <div className="flex gap-4 w-full justify-start items-center" key={habit.id}>
        <div>
          <Input type="radio" />
        </div>
        <div className="relative w-full flex flex-col items-start gap-2 bg-gray-700 p-2 rounded-lg">
            <div className='flex gap-2 items-center'>

            <BookOpenText />
            <h1 className='text-lg'>{habit.name}</h1>
            </div>
          <p>{habit.area}</p>

          <p>{ (habit.date).toString()}</p>
          <div className="absolute right-1 top-[50%] translate-y-[-50%]">
            <Button className="bg-transparent">
              <EllipsisVertical />
            </Button>
          </div>
        </div>
      </div>

        ))}
      
    </div>
  )
}

export default ListHabits
