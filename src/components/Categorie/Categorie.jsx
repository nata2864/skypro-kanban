import { CategorieButton, CategorieText } from "./Categorie.styled";

function Categorie({ topic }) {
  return (
    <CategorieButton $topic={topic}>
      <CategorieText $topic={topic}>{topic}</CategorieText>
    </CategorieButton>
  );
}

export default Categorie;
