'use client'
import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { newDateStore } from '@/store/habitStore'

const DateInput: FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const {  dateHabit, addDate } = newDateStore(state => ({
    dateHabit: state.dateHabit,
    addDate: state.addDate
  }));

  const handleDateChange = (dateHabit: Date | null) => {
    setStartDate(dateHabit);
    if (dateHabit) {
      addDate({ dateHabit });
    }
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        inline
        // showMonthYearPicker
      />
      <p>{dateHabit.dateHabit?.toString() || 'No date selected'}</p>
    </div>
  );
};

export default DateInput;

