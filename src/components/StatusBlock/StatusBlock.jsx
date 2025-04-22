import { statusTitles } from "../../const";
import * as S from "./StatusBlock.styled"

function StatusBlock({ isEditMode,  selectedTask}) {
  return (
   

      <S.StatusThemes>
        {isEditMode ? (
          statusTitles.map((item) => (
            <S.StatusTheme
              key={item}
            //   $isActive={item === selectedStatus}
            //   onClick={() => onSelectStatus(item)}
            //   error={statusError}
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
