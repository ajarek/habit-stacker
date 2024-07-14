'use client'

import { useState } from 'react'
import { newHabitStore, newDateStore } from '@/store/habitStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Globe,
  Handshake,
  Plus,
  CircleArrowLeft,
  CircleArrowRight,
  BookOpenText,
  Trash2,
  Circle,
  CircleCheckBig,
} from 'lucide-react'

const today = new Date()

const arrayDays = [
  'Niedziela',
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
]
const ListHabits = ({ checked }: { checked: boolean }) => {
  const { habits, removeHabit, changeHabitCompleted } = newHabitStore()
  const { dateHabit, addOneDay, subtractOneDay } = newDateStore()

  return (
    <div className="w-full flex flex-col gap-4">
      {!checked &&
      <div className="flex  flex-col items-start  gap-2">
        <h2 className="text-xl  capitalize ">
          {arrayDays[dateHabit.dateHabit?.getDay() ?? today.getDay()]}
        </h2>
        <p>
          {dateHabit.dateHabit?.toLocaleDateString() ||
            today.toLocaleDateString()}
        </p>
        <div className="flex gap-2">
          <Button
            size="icon"
            onClick={() => subtractOneDay(dateHabit.dateHabit || today)}
          >
            <CircleArrowLeft />
          </Button>

          <Button
            size="icon"
            onClick={() => addOneDay(dateHabit.dateHabit || today)}
          >
            <CircleArrowRight />
          </Button>
        </div>
      </div>
          }
      {habits.length > 0 &&
        habits
           .filter((habit) => habit.completed === checked )
          .filter(
            (habit) =>
             ( habit.repeat === 'every') ||
              habit.date.toString() === dateHabit.dateHabit?.toLocaleDateString()
          )
          .map((habit) => (
            <div
              className="flex gap-4 w-full justify-start items-center"
              key={habit.id}
            >
              <div>
                <Button
                  size="icon"
                  className="w-6 h-6 p-0 bg-transparent hover:bg-blue-500 rounded-full"
                  onClick={() => changeHabitCompleted(habit.id, true)}
                >
                   {checked? <CircleCheckBig /> : <Circle />}
                </Button>
              </div>
              <div className="relative w-full flex flex-col items-start gap-2 bg-gray-700 p-2 rounded-lg">
                <div className="flex gap-2 items-center">
                  <BookOpenText />
                  <h1 className="text-lg">{habit.name}</h1>
                </div>
                <p>{habit.area}</p>

                <p>{habit.date.toString()}</p>
                <div className="absolute right-1 top-[50%] translate-y-[-50%]">
                  <Button
                    size="icon"
                    onClick={() => removeHabit(habit.id)}
                    className="w-8 h-8 p-0 bg-transparent hover:bg-primary "
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}

export default ListHabits
