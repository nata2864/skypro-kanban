import { Button } from "../../Button.styled";
import CalendarCard from "../../Calendar/CalendarCard";
// import Calendar from "../../Calendar/Calendar";
import Categories from "../../Categories/Categories";
import PopNewCardForm from "../../PopNewCardForm/PopNewCardForm";
import * as S from "./PopNewCard.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../../const";
import { checkRequiredFields } from "../../../utils";
import { toast } from "react-toastify";

function PopNewCard() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [formData, setFormData] = useState({
    task: "",
    description: "",
  });
  // const [errors, setErrors] = useState({
  //   task: false,
  //   description: false,
  // });
  const [error, setError] = useState("");
  const [categoryError, setCategoryError] = useState(false);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setCategoryError(false)
  };

  const navigate = useNavigate();



 

  const validateForm = () => {
    const requiredFields = ["task", "description"];
    const { isValid } = checkRequiredFields(formData, requiredFields);

    // setErrors(errors);
    setError(isValid ? "" : toast.error("Введите данные"));
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // setErrors({ ...errors, [name]: false });
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();
    const isCategorySelected = selectedTopic !== null;

    setCategoryError(!isCategorySelected);

    if (!isFormValid || !isCategorySelected) {
      return;
    }
  
    console.log("Valid");
   
  };

  return (
    <S.PopNewCardWrapper>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock >
          <S.PopNewCardContent as="form" onSubmit={handleSubmit}>
            <S.Title>Создание задачи</S.Title>

            <S.CloseButton
              onClick={() => {
                navigate(RoutesApp.MAIN);
              }}
            >
              ✖
            </S.CloseButton>
            <S.FormWrapper >
              <PopNewCardForm
              handleChange={handleChange}
              formData ={formData}
              // errors={errors}
              error={error}
              />
              <CalendarCard
                selected={selectedData}
                onSelect={setSelectedData}
              />
            </S.FormWrapper>
         
            <Categories
              selectedTopic={selectedTopic}
              onSelectTopic={handleSelectTopic}
              categoryError ={categoryError}
            />
             
            <Button type={"submit"} $primary $float $size="newTask" id="btnCreate">
              Создать задачу
            </Button>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCardWrapper>
  );
}

export default PopNewCard;
