import styled from "styled-components";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css"; 

export const Calendar = styled(DayPicker)`
  --rdp-day-height: 25px; 
  --rdp-day-width: 25px;
 --rdp-day_button-height: 25px; 
  --rdp-day_button-width: 25px;
  --rdp-nav-height: 25px; 
  --rdp-cell-width: 25px;
`; 

export const CalendarPeriod = styled.p`
// margin-bottom: 12px;
 color: #94a6be;
  font-size: 10px;
  line-height: 1;

`
;

export const SelectedData = styled.span`
 color: #000000;

`
; 