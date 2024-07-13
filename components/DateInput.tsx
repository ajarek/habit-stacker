'use client'
import React, { FC } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { newDateStore } from '@/store/habitStore'

const DateInput: FC = () => {
  const { dateHabit, addDate } = newDateStore()

  const handleDateChange = (dateHabit: Date | null) => {
    if (dateHabit) {
      addDate({ dateHabit })
    }
  }

  return (
    <div>
      <DatePicker
        onChange={handleDateChange}
        inline
        selected={dateHabit.dateHabit}
      />
      <p>{dateHabit.dateHabit?.toLocaleDateString() || 'No date selected'}</p>
    </div>
  )
}

export default DateInput
