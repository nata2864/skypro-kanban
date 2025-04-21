import * as S from "./Categories.styled";
import {
  CategoriePopUpButton,
  CategoriePopUpButtonText,
} from "../CategorieButton/CategorieButton.styled";
// import { PopUpErrorText } from "../PopNewCardForm/PopNewCardForm.styled";

function Categories({ selectedTopic, onSelectTopic }) {
  const categories = ["Web Design", "Research", "Copywriting"];

  console.log("selectedTopic:", selectedTopic);

  return (
    <S.Categories>
      <S.CategoriesTitle>Категория</S.CategoriesTitle>
      <S.CategoriesThemes>
        {categories.map((topic) => (
          <CategoriePopUpButton
            key={topic}
            $topic={topic}
            $isActive={topic === selectedTopic}
            onClick={() => onSelectTopic(topic)}
          >
            <CategoriePopUpButtonText $topic={topic}>
              {topic}
            </CategoriePopUpButtonText>
          </CategoriePopUpButton>
        ))}
          {/* {categoryError && <PopUpErrorText>Пожалуйста, выберите категорию</PopUpErrorText>} */}
         
      </S.CategoriesThemes>
    </S.Categories>
  );
}

export default Categories;
