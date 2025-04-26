import { TaskContext } from "../../context/TaskContext";
import Column from "../Column/Column";
import * as S from "./Main.styled";
import { useContext } from "react";
import { statusTitles } from "../../const";

function Main() {
  const { loading, tasks } = useContext(TaskContext);

  return loading ? (
    <p>Идёт загрузка</p>
  ) : (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {tasks && tasks.length > 0 ? (
              statusTitles.map((item, index) => (
                <Column key={index} title={item} tasks={tasks} />
              ))
            ) : (
              <S.NoTasksText>Новых задач нет</S.NoTasksText>
            )}
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
}

export default Main;
