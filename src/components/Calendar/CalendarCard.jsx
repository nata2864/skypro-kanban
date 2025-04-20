import React, { useState } from 'react';
import { Calendar, SelectedData,CalendarPeriod } from './CalendarCard.styled';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';


const CalendarCard = () => {
 
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={
          selected ? (
            <CalendarPeriod>
              Срок исполнения:
              <SelectedData>
                {format(selected, "dd.MM.yy", { locale: ru })}
              </SelectedData>
            </CalendarPeriod>
          ) : (
            <CalendarPeriod>Выберите срок исполнения</CalendarPeriod>
          )
        }
      />
    </div>
  );
         
 
};

export default CalendarCard ;
