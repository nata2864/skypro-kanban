import { Button } from "../../Button.styled";
import CalendarCard from "../../Calendar/CalendarCard";
// import Calendar from "../../Calendar/Calendar";
import Categories from "../../Categories/Categories";
import PopNewCardForm from "../../PopNewCardForm/PopNewCardForm";
import * as S from "./PopNewCard.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../../const";
import { useCategoryValidation } from "../../../hooks/useCategoryValidation";
import { useDateValidation } from "../../../hooks/useDateValidation";
import { useFormValidation } from "../../../hooks/useFormValidation";

function PopNewCard() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    task: "",
    description: "",
  });

  const { categoryError, validateCategory } = useCategoryValidation();
  const { dateError, validateDate } = useDateValidation();

  const { formError, validateForm } = useFormValidation(formData, [
    "task",
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

    console.log("Valid");
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
            <S.FormWrapper>
              <PopNewCardForm
                handleChange={handleChange}
                formData={formData}
                // errors={errors}
                error={formError}
              />
              <CalendarCard
                selected={selectedDate}
                onSelectDate={setSelectedDate}
                dateError={dateError}
              />
            </S.FormWrapper>

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
