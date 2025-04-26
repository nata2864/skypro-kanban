import { Button } from "../../Button.styled";
import Categories from "../../Categories/Categories";
import * as S from "./PopNewCard.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../../const";
import { useCategoryValidation } from "../../../hooks/useCategoryValidation";
import { useDateValidation } from "../../../hooks/useDateValidation";
import { useFormValidation } from "../../../hooks/useFormValidation";
import ModalForm from "../../ModalForm/ModalForm";
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";

function PopNewCard() {
  const { addNewTask } = useContext(TaskContext);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { categoryError, validateCategory } = useCategoryValidation();
  const { dateError, validateDate } = useDateValidation();

  const { formError, validateForm } = useFormValidation(formData, [
    "title",
    "description",
  ]);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const navigate = useNavigate();

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
    const isCategoryValid = validateCategory(selectedTopic);
    const isDateValid = validateDate(selectedDate);

    if (!isFormValid || !isCategoryValid || !isDateValid) {
      return;
    }

    const newTask = {
      ...formData,
      date: selectedDate,
      topic: selectedTopic,
    };
    try {
      await addNewTask({ task: newTask });

      navigate(RoutesApp.MAIN);
    } catch (error) {
      console.error("Ошибка при создании задачи", error);
    }
  };

  return (
    <S.PopNewCardWrapper>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent as="form" onSubmit={handleSubmit}>
            <S.Title>Создание задачи</S.Title>

            <S.CloseButton
              onClick={() => {
                navigate(RoutesApp.MAIN);
              }}
            >
              ✖
            </S.CloseButton>

            <ModalForm
              handleChange={handleChange}
              formData={formData}
              error={formError}
              showTaskInput={true}
              selected={selectedDate}
              onSelectDate={setSelectedDate}
              dateError={dateError}
            />

            <Categories
              selectedTopic={selectedTopic}
              onSelectTopic={handleSelectTopic}
              categoryError={categoryError}
            />

            <Button
              type={"submit"}
              $primary
              $float
              $size="newTask"
              id="btnCreate"
            >
              Создать задачу
            </Button>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCardWrapper>
  );
}

export default PopNewCard;
