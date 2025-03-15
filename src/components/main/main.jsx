import Column from "../Column/Column";

const columnTitles = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ loading }) {
  return ( loading ? <p>Идёт загрузка</p> :
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnTitles.map((item, index) => (
              <Column key={index} title={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
