import { Button } from "../../Button.styled";
// import Calendar from "../../Calendar/Calendar";
import Categories from "../../Categories/Categories";
import PopNewCardForm from "../../PopNewCardForm/PopNewCardForm";
import * as S from "./PopNewCard.styled";
import { useState } from "react";

function PopNewCard({ onClose }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <S.PopNewCardWrapper>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            {/* <div className="pop-new-card__block">
          <div className="pop-new-card__content"> */}
            <S.Title>Создание задачи</S.Title>
            {/* Не срабатывает тк убрала стейт из Хидер */}
            <S.CloseButton className="button_close" onClick={onClose}>
              ✖
            </S.CloseButton>
            <PopNewCardForm></PopNewCardForm>

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
