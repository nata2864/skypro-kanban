import { FormWrapper } from "./ModalForm.styled"
import TaskForm from "../TaskForm/TaskForm";
import CalendarCard from "../Calendar/CalendarCard";


function ModalForm({handleChange,formData,error,selected,onSelectDate,dateError,showTaskInput}) {
    return(<FormWrapper>
        <TaskForm
          handleChange={handleChange}
          formData={formData}
          error={error}
          showTaskInput = {showTaskInput}
        />
        <CalendarCard
          selected={selected}
          onSelectDate={onSelectDate}
          dateError={dateError}
        />
        </FormWrapper>
        )
    }

    export default ModalForm
