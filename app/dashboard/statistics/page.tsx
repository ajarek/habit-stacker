'use client'
import { newHabitStore, newAreaStore } from '@/store/habitStore'
import ChartPie from '@/components/ChartPie'

const Statistics = () => {
  const { habits } = newHabitStore()
  const { areas } = newAreaStore()

  const data = [
    {
      name: 'Do Realizacji',
      value: habits.filter((habit) => !habit.completed).length,
    },
    {
      name: 'Zrealizowane',
      value: habits.filter((habit) => habit.completed).length,
    },
  ]
  return (
    <div className="min-h-screen w-full flex flex-col justify-between items-center border-[12px] border-gray-500 py-2   px-4">
      <div className="w-full flex flex-wrap justify-center items-center py-2   px-4 gap-4">
        <div className="flex flex-col justify-between items-center border-[12px] border-gray-500 py-2 px-4">
          <h1>Liczba nawyków.</h1>
          <p>{habits.length}</p>
        </div>
        <div className="flex flex-col justify-between items-center border-[12px] border-gray-500 py-2 px-4">
          <h1>Liczba do realizacji .</h1>
          <p>{habits.filter((habit) => !habit.completed).length}</p>
        </div>
        <div className="flex flex-col justify-between items-center border-[12px] border-gray-500 py-2 px-4">
          <h1>Liczba zrealizowanych.</h1>
          <p>{habits.filter((habit) => habit.completed).length}</p>
        </div>
        <div className="flex flex-col justify-between items-center border-[12px] border-gray-500 py-2 px-4">
          <h1>Liczba obszarów</h1>
          <p>{areas.length}</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-[12px] border-gray-500 py-2   px-4">
        <ChartPie data={data} />
      </div>
    </div>
  )
}

export default Statistics
