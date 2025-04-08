import { useNavigate } from "react-router-dom";
import { Button } from "../../Button.styled";
import * as S from "./PopUserSet.styled"
import { RoutesApp } from "../../../const";

function PopUserSet({ setIsOpenPopUser, isOpenPopUser }) {
  const navigate= useNavigate();
 
  return (
    <S.PopUserSet
    $isOpen={isOpenPopUser}
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
             navigate(RoutesApp.EXIT);
            }
          }
        >
          Выйти
        </Button>
      </div>
    </S.PopUserSet>
  );
}

export default PopUserSet;
