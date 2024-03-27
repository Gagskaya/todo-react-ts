import "./ListTitle.scss";

import editSvg from "../../assets/img/edit.svg";
import { useAppDispatch } from "../../store";
import { editListTitle } from "../../store/actionCreators/lists";

interface Props {
  title: string | undefined;
  color: string | undefined;
  listId: string | undefined;
}

const ListTitle = ({ title, color, listId }: Props) => {
  console.log(listId);

  const dispatch = useAppDispatch();
  const onEditTitle = () => {
    const prompt = window.prompt("Введите новое название", title);
    dispatch(editListTitle(listId, prompt));
    console.log(prompt);
  };
  return (
    <div className="list-title">
      <h2 style={{ color }}>{title}</h2>

      {listId ? (
        <img src={editSvg} alt="редактировать" onClick={onEditTitle} />
      ) : null}
    </div>
  );
};

export default ListTitle;
