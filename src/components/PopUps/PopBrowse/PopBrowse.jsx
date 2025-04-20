// import { useParams } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
// import { CategoriesThemes, CategoriesTitle } from "../../Categories/Categories.styled";
import {
  CategoriePopUpButton,
  CategoriePopUpButtonText,
} from "../../CategorieButton/CategorieButton.styled";
import { statusTitles } from "../../../const";
import { Button } from "../../Button.styled";
import CalendarCard from "../../Calendar/CalendarCard";

function PopBrowse() {
  // const { id } = useParams();

  return (
    <S.PopBrowseWrapper >
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>Название задачи</S.PopBrowseTitle>
              <CategoriePopUpButton>
                <CategoriePopUpButtonText>Web Design</CategoriePopUpButtonText>
              </CategoriePopUpButton>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusTitle>Статус</S.PopBrowseStatusTitle>
              <S.StatusThemes>
            
                {statusTitles.map((item, index) => (
                  <S.StatusTheme key={index}>
                  <S.StatusThemeTitle>{item}</S.StatusThemeTitle>
                </S.StatusTheme>
           
            ))}
              </S.StatusThemes>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm >
                <S.FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormBrowseArea
                   
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              
              <CalendarCard />
            </S.PopBrowseWrap>
            
            <S.PopBrowseBtnBrowse>
              <S.BtnGroep>
                <S.PopBrowseButton>
                 Редактировать задачу
                </S.PopBrowseButton>
                <S.PopBrowseButton>
                  Удалить задачу
                </S.PopBrowseButton>
              </S.BtnGroep>
              <S.PopBrowseButton $primary>
                Закрыть
              </S.PopBrowseButton >
            </S.PopBrowseBtnBrowse>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroep>
                <S.PopBrowseButton>
                  Сохранить
                </S.PopBrowseButton>
                <S.PopBrowseButton>
                  Отменить
                </S.PopBrowseButton>
                <S.PopBrowseButton
                >
                  Удалить задачу
                </S.PopBrowseButton>
                </S.BtnGroep>
              <S.PopBrowseButton $primary>
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
