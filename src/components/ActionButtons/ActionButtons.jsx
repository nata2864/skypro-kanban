import * as S from "./ActionButtons.styled";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../const";

function ActionButtons({
  isEditMode,
  handelDelete,
  onSubmit,
  onCancel,
  onEdit,
}) {
  const navigate = useNavigate();
  return (
    <S.PopBrowseBtnBrowse>
      <S.BtnGroep>
        {isEditMode ? (
          <>
            <S.PopBrowseButton type="onSubmit" onClick={onSubmit}>
              Сохранить
            </S.PopBrowseButton>
            <S.PopBrowseButton type="button" onClick={onCancel}>
              Отменить
            </S.PopBrowseButton>
            <S.PopBrowseButton type="button" onClick={handelDelete}>
              Удалить задачу
            </S.PopBrowseButton>
          </>
        ) : (
          <>
            <S.PopBrowseButton type="button" onClick={onEdit}>
              Редактировать задачу
            </S.PopBrowseButton>
            <S.PopBrowseButton type="button" onClick={handelDelete}>
              Удалить задачу
            </S.PopBrowseButton>
          </>
        )}
      </S.BtnGroep>

      <S.PopBrowseButton
        $primary
        type="button"
        onClick={() => {
          navigate(RoutesApp.MAIN);
        }}
      >
        Закрыть
      </S.PopBrowseButton>
    </S.PopBrowseBtnBrowse>
  );
}

export default ActionButtons;
