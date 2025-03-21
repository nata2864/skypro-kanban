import { Button } from "../../Button.styled";
import * as S from "./PopUserSet.styled"

function PopUserSet({ setIsOpenPopUser, setIsOpenPopExit, isOpenPopUser }) {
  return (
    <S.PopUserSet
      id="user-set-target"
      style={{ display: isOpenPopUser ? "block" : "none" }}
    >
      <div>
        <S.UserName>Ivan Ivanov</S.UserName>
        <S.UserMail>ivan.ivanov@gmail.com</S.UserMail>
        <S.ThemeBlock>
          <S.ThemeName>Темная тема</S.ThemeName>
          <S.ThemeCheckbox type="checkbox" name="checkbox" />
        </S.ThemeBlock>
        <Button
          $size="user"
          type="button"
          onClick={() => {
            setIsOpenPopUser(false);
            setIsOpenPopExit(true);
          }}
        >
          Выйти
        </Button>
      </div>
    </S.PopUserSet>
  );
}

export default PopUserSet;
