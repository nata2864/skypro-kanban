import * as S from "./PopBrowse.styled";
import {
  CategoriePopUpButton,
  CategoriePopUpButtonText,
} from "../../CategorieButton/CategorieButton.styled";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { useDateValidation } from "../../../hooks/useDateValidation";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../../context/TaskContext";
import ModalForm from "../../ModalForm/ModalForm";
import ActionButtons from "../../ActionButtons/ActionButtons";
import StatusBlock from "../../StatusBlock/StatusBlock";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../../const";
import useStatusValidation from "../../../hooks/useStatusValidation ";

function PopBrowse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTaskById,updateTask } = useContext(TaskContext);
  const selectedTask = tasks.find((task) => task._id === id);
  const { dateError, validateDate } = useDateValidation();

  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const { formError, validateForm } = useFormValidation(formData, [
    "description",
  ]);

  const { statusError, validateStatus } = useStatusValidation();

  const handleSelectStatus = (status) => {
    setSelectedStatus(status);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();
    const isStatusValid = validateStatus(selectedStatus);
    const isDateValid = validateDate(selectedDate);

    if (!isFormValid || !isDateValid || !isStatusValid) {
      return;
    }
    const newTask = {
      ...formData,
      title: selectedTask.title,
      topic: selectedTask.topic,
  
      date: selectedDate,
      status: selectedStatus,
    };

    console.log(newTask)
    try {
      await updateTask ({ task: newTask, id: selectedTask._id});

      navigate(RoutesApp.MAIN);
    } catch (error) {
      console.error("Ошибка при редактировании задачи", error);
    }
  };

  const handelEdit = () => {
    requestAnimationFrame(() => {
      setIsEditMode(true);
    });
  };

  const handelDelete = () => {
    deleteTaskById({ id: selectedTask._id });
    navigate(RoutesApp.MAIN);
  };

  return (
    <S.PopBrowseWrapper>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{selectedTask?.title}</S.PopBrowseTitle>
              <CategoriePopUpButton $topic={selectedTask?.topic} $isActive>
                <CategoriePopUpButtonText $topic={selectedTask?.topic}>
                  {selectedTask?.topic}
                </CategoriePopUpButtonText>
              </CategoriePopUpButton>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusTitle>Статус</S.PopBrowseStatusTitle>
              <StatusBlock
                isEditMode={isEditMode}
                selectedStatus={selectedStatus}
                onSelectStatus={handleSelectStatus}
                selectedTask={selectedTask}
                statusError={statusError}
              />
            </S.PopBrowseStatus>

            <ModalForm
              handleChange={handleChange}
              formData={formData}
              error={formError}
              selected={selectedDate}
              onSelectDate={setSelectedDate}
              dateError={dateError}
            />

            <ActionButtons
              isEditMode={isEditMode}
              handelDelete={handelDelete}
              onSubmit={handleSubmit}
              onCancel={handelEdit}
            />
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseWrapper>
  );
}

export default PopBrowse;
