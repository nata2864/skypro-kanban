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