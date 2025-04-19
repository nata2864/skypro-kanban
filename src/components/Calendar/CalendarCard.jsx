import React, { useState } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Calendar } from './CalendarCard.styled';
// import { Calendar } from './CalendarCard.styled';

const CalendarCard = () => {
 
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
    <Calendar
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
    {selected && (
      <p style={{ marginTop: "10px" }}>
        Selected: {selected.toLocaleDateString()}
      </p>
    )}
  </div>
  );
};

export default CalendarCard ;
