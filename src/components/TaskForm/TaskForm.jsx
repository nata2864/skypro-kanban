import * as S from "./TaskForm.styled";

function TaskForm({ handleChange, formData, showTaskInput}) {
  return (
    <S.Form>
      {showTaskInput && (
        <S.FormBlock>
          <S.FormLabel htmlFor="formTitle">Название задачи</S.FormLabel>
          <S.Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            id="formTitle"
            placeholder="Введите название задачи..."
          />
        </S.FormBlock>
      )}

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

export default TaskForm;
