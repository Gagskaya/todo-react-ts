import { useSelector } from "react-redux";
import { getSelectedList } from "../../store/selectors/lists";

function Main() {
  const selectedList = useSelector(getSelectedList);

  return <div className="main">{selectedList.id}</div>;
}

export default Main;
