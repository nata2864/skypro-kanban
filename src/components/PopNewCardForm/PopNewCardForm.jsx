import * as S from "./PopNewCardForm.styled";

function PopNewCardForm({ handleChange, formData }) {
  return (
    <S.Form>
      <S.FormBlock>
        <S.FormLabel htmlFor="formTitle">Название задачи</S.FormLabel>
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
        <S.FormLabel htmlFor="textArea">Описание задачи</S.FormLabel>
        <S.TextArea
          name="description"
          value={formData.description}
          onChange={handleChange}
       
          placeholder="Введите описание задачи..."
        />
      </S.FormBlock>
    </S.Form>
  );
}

export default PopNewCardForm;
