import { Button } from "../../Button.styled";
import CalendarCard from "../../Calendar/CalendarCard";
// import Calendar from "../../Calendar/Calendar";
import Categories from "../../Categories/Categories";
import PopNewCardForm from "../../PopNewCardForm/PopNewCardForm";
import * as S from "./PopNewCard.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../../const";

function PopNewCard() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedData, setSelectedData] = useState(new Date());

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const navigate = useNavigate();

  return (
    <S.PopNewCardWrapper>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            {/* <div className="pop-new-card__block">
          <div className="pop-new-card__content"> */}
            <S.Title>Создание задачи</S.Title>

            <S.CloseButton
              onClick={() => {
                navigate(RoutesApp.MAIN);
              }}
            >
              ✖
            </S.CloseButton>
            <S.FormWrapper>
              <PopNewCardForm />
              <CalendarCard
                selected={selectedData}
                onSelect={setSelectedData}
              />
            </S.FormWrapper>

            <Categories
              selectedTopic={selectedTopic}
              onSelectTopic={handleSelectTopic}
            />
            <Button $primary $float $size="newTask" id="btnCreate">
              Создать задачу
            </Button>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCardWrapper>
  );
}

export default PopNewCard;
