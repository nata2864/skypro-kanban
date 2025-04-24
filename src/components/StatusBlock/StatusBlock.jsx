import { statusTitles } from "../../const";
import * as S from "./StatusBlock.styled"

function StatusBlock({ isEditMode,  selectedTask, selectedStatus,  onSelectStatus}) {
  return (
   

      <S.StatusThemes>
        {isEditMode ? (
          statusTitles.map((item) => (
            <S.StatusTheme
              key={item}
              $isActiveStatus={item === selectedStatus}
              onClick={() => onSelectStatus(item)}

            >
              <S.StatusThemeTitle>{item}</S.StatusThemeTitle>
            </S.StatusTheme>
          ))
        ) : (
          <S.StatusTheme $isActiveStatus>
            <S.StatusThemeTitle>{selectedTask?.status}</S.StatusThemeTitle>
          </S.StatusTheme>
        )}
      </S.StatusThemes>
    
  );
}

export default StatusBlock;
