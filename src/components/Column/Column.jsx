import { cardList } from "../../data";
import Card from "../Card/Card";
import *as S from "./Column.styled"

function Column({ title }) {
  const filtertasks = cardList.filter((card) => card.status === title);

  return (
    <S.Column>
      <S.ColumnRow>
        <S.Title>{title}</S.Title>
      </S.ColumnRow>
      <S.Cards>
        {filtertasks.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </S.Cards>
    </S.Column>
  );
}

export default Column;
