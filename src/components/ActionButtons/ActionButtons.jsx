import * as S from "./ActionButtons.styled";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../const";

function ActionButtons({isEditMode, onSubmit, onCancel}) {

      const navigate = useNavigate();
    return (
        // <div>
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
      <S.PopBrowseButton type="onSubmit" onClick={onSubmit}>
        Удалить задачу
      </S.PopBrowseButton>
    </>
  ) : (
    <>
      <S.PopBrowseButton type="button" onClick={onCancel}>
        Редактировать задачу
      </S.PopBrowseButton>
      <S.PopBrowseButton type="button">
        Удалить задачу
      </S.PopBrowseButton>
    </>
  )}
</S.BtnGroep>

        <S.PopBrowseButton $primary type="button"  onClick={() => {
                  navigate(RoutesApp.MAIN);
                }}>
          Закрыть
        </S.PopBrowseButton>
      </S.PopBrowseBtnBrowse>
    //   </div>
    );
  }
  
  export default ActionButtons;
  