import { useState } from 'react';

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevMonth = new Date(year, month - 1, 0);
      const prevDate = prevMonth.getDate() - startingDayOfWeek + i + 1;
      days.push({
        date: prevDate,
        isCurrentMonth: false,
        fullDate: new Date(year, month - 1, prevDate),
      });
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: day,
        isCurrentMonth: true,
        fullDate: new Date(year, month, day),
      });
    }

    // Add days from next month to fill the grid
    const totalCells = Math.ceil(days.length / 7) * 7;
    let nextMonthDay = 1;
    for (let i = days.length; i < totalCells; i++) {
      days.push({
        date: nextMonthDay,
        isCurrentMonth: false,
        fullDate: new Date(year, month + 1, nextMonthDay),
      });
      nextMonthDay++;
    }

    return days;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const handleDateClick = (day) => {
    if (day.isCurrentMonth) {
      setSelectedDate(day.fullDate);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return {
    currentDate,
    selectedDate,
    selectedTime,
    months,
    timeSlots,
    getDaysInMonth,
    isToday,
    isSelected,
    handleDateClick,
    handlePrevMonth,
    handleNextMonth,
    handleTimeSelect,
    setSelectedTime
  };
};
