'use client'
import React, { FC } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { pl } from 'date-fns/locale/pl';
registerLocale('pl', pl)
setDefaultLocale('pl')
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
        dateFormat="yyyy-MM-dd"
        locale="pl"
      />
      <p>{dateHabit.dateHabit?.toLocaleDateString() || 'No date selected'}</p>
    </div>
  )
}

export default DateInput
