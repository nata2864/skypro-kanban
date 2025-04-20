import { TaskContext } from "../../context/TaskContext";
import Column from "../Column/Column";
import * as S from "./Main.styled";
import { useContext } from "react";
import { statusTitles } from "../../const";

function Main() {
  const { error, loading, tasks } = useContext(TaskContext);

  return loading ? (
    <p>Идёт загрузка</p>
  ) : (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {statusTitles.map((item, index) => (
              <Column key={index} title={item} tasks={tasks} />
            ))}
          </S.MainContent>
        </S.MainBlock>
        <p>{error}</p>
      </S.Container>
    </S.Main>
  );
}

export default Main;
