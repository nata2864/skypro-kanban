import { Button } from "../../Button.styled";
// import Calendar from "../../Calendar/Calendar";
import Categories from "../../Categories/Categories";
import PopNewCardForm from "../../PopNewCardForm/PopNewCardForm";
import * as S from "./PopNewCard.styled";

function PopNewCard({ onClose }) {
  return (
    <S.PopNewCardWrapper >
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
        {/* <S.FormWrapper>
          <S.Form
            class="pop-new-card__form form-new"
            id="formNewCard"
            action="#"
          >
            <S.FormBlock>
              <S.Label htmlFor="formTitle">Название задачи</S.Label>
              <S.Input
                type="text"
                id="formTitle"
                placeholder="Введите название задачи..."
              />
            </S.FormBlock>
            <S.FormBlock>
              <S.Label htmlFor="textArea">Описание задачи</S.Label>
              <S.TextArea
                id="textArea"
                placeholder="Введите описание задачи..."
              />
            </S.FormBlock>
          </S.Form>
          <Calendar />
        </S.FormWrapper> */}

        {/* <div className="pop-new-card__categories categories">
          <p className="categories__p subttl">Категория</p>
          <div className="categories__themes">
            <div className="categories__theme _orange _active-category">
              <p className="_orange">Web Design</p>
            </div>
            <div className="categories__theme _green">
              <p className="_green">Research</p>
            </div>
            <div className="categories__theme _purple">
              <p className="_purple">Copywriting</p>
            </div>
          </div>
        </div> */}
        <Categories/>
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
