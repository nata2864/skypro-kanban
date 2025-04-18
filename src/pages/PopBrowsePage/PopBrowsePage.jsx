import PopBrowse from "../../components/PopUps/PopBrowse/PopBrowse";
import { useParams } from "react-router-dom";

function PopBrowsePage() {
  const { id } = useParams();
  console.log(id); // это должно вывести ID из URL
  return <PopBrowse />;
  // Используй id для загрузки данных и отображения карточки
}


// function PopBrowsePage() {
//   return <PopBrowse />;
// }

export default PopBrowsePage;