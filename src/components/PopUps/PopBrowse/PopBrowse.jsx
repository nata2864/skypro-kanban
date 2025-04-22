import * as S from "./PopBrowse.styled";
import {
  CategoriePopUpButton,
  CategoriePopUpButtonText,
} from "../../CategorieButton/CategorieButton.styled";
// import { statusTitles } from "../../../const";
// import CalendarCard from "../../Calendar/CalendarCard";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { useDateValidation } from "../../../hooks/useDateValidation";
// import { useStatusValidation } from "../../../hooks/useStatusValidation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RoutesApp } from "../../../const";
// import { useStatusValidation } from "../../../hooks/useStatusValidation ";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../../context/TaskContext";
import { useContext } from "react";
import ModalForm from "../../ModalForm/ModalForm";

function PopBrowse() {
  const { id } = useParams();

  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const selectedTask = tasks.find((task) => task._id === id);
  console.log(selectedTask);

  // const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
  });

  // const { statusError, validateStatus } = useStatusValidation();
  const { dateError, validateDate } = useDateValidation();

  const { formError, validateForm } = useFormValidation(formData, [
    "description",
  ]);

  // const handleSelectStatus = (status) => {
  //   setSelectedStatus(status);
  // };

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
    // const isStatusValid = validateStatus(selectedStatus);
    const isDateValid = validateDate(selectedDate);

    if (!isFormValid ||  !isDateValid) {
      return;
    }

    console.log("Valid");
  };

  return (
    <S.PopBrowseWrapper>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent as="form" onSubmit={handleSubmit}>
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
              <S.StatusThemes>
                <S.StatusTheme $isActiveStatus>
             
                  <S.StatusThemeTitle>{selectedTask?.status}</S.StatusThemeTitle>
                </S.StatusTheme>
                {/* {statusTitles.map((item) => (
                  <S.StatusTheme
                    key={item}
                    $isActive={item === selectedStatus}
                    onClick={() => handleSelectStatus(item)}
                    error={statusError}
                  >
                    <S.StatusThemeTitle>{item}</S.StatusThemeTitle>
                  </S.StatusTheme>
                ))} */}
              </S.StatusThemes>
            </S.PopBrowseStatus>
            {/* <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormBrowseBlock>
                  <S.PopBrowseFormLabel>Описание задачи</S.PopBrowseFormLabel>
                  <S.FormBrowseArea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    error={formError}
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              <CalendarCard
                selected={selectedDate}
                onSelectDate={setSelectedDate}
                error={dateError}
              />
            </S.PopBrowseWrap> */}
            <ModalForm   handleChange={handleChange}
             formData={formData}
             error={formError}
            //  showTaskInput = {true}
             selected={selectedDate}
             onSelectDate={setSelectedDate}
             dateError={dateError}/>

            <S.PopBrowseBtnBrowse>
              <S.BtnGroep>
                <S.PopBrowseButton type="button">
                  Редактировать задачу
                </S.PopBrowseButton>
                <S.PopBrowseButton type="button">
                  Удалить задачу
                </S.PopBrowseButton>
              </S.BtnGroep>
              <S.PopBrowseButton
                $primary
                onClick={() => {
                  navigate(RoutesApp.MAIN);
                }}
              >
                Закрыть
              </S.PopBrowseButton>
            </S.PopBrowseBtnBrowse>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroep>
                <S.PopBrowseButton type="submit">Сохранить</S.PopBrowseButton>
                <S.PopBrowseButton type="button">Отменить</S.PopBrowseButton>
                <S.PopBrowseButton type="button">
                  Удалить задачу
                </S.PopBrowseButton>
              </S.BtnGroep>
              <S.PopBrowseButton
                $primary
                onClick={() => {
                  navigate(RoutesApp.MAIN);
                }}
              >
                Закрыть
              </S.PopBrowseButton>
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseWrapper>
  );
}

export default PopBrowse;
