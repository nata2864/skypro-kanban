import * as S from "./PopNewCardForm.styled";

function PopNewCardForm({ handleChange, formData }) {
  return (
    <S.Form>
      <S.FormBlock>
        <S.Label htmlFor="formTitle">Название задачи</S.Label>
        <S.Input
          name="task"
          value={formData.task}
          onChange={handleChange}
          type="text"
          id="formTitle"
          placeholder="Введите название задачи..."
        />
      </S.FormBlock>
      <S.FormBlock>
        <S.Label htmlFor="textArea">Описание задачи</S.Label>
        <S.TextArea
          name="description"
          value={formData.description}
          onChange={handleChange}
          id="textArea"
          placeholder="Введите описание задачи..."
        />
      </S.FormBlock>
    </S.Form>
  );
}

export default PopNewCardForm;
