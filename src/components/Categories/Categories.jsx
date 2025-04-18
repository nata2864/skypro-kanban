import * as S from "./Categories.styled"
import { CategoriePopUpButton, CategoriePopUpButtonText } from "../CategorieButton/CategorieButton.styled";

function Categories() {

    const categories = ["Web Design", "Research", "Copywriting"];
  return (
    <S.Categories>
          <S.CategoriesTitle>Категория</S.CategoriesTitle>
          <S.CategoriesThemes>
          {categories.map((topic) => (
    <CategoriePopUpButton key={topic} $topic={topic}>
      <CategoriePopUpButtonText $topic={topic}>{topic}</CategoriePopUpButtonText>
    </CategoriePopUpButton>
  ))}
          </S.CategoriesThemes>
        </S.Categories>
  );
}

export default Categories;



