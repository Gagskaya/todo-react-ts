import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { List } from "../../types/lists";
import {
  addList,
  deleteList,
  fetchLists,
} from "../../store/actionCreators/lists";
import { getLists, getSelectedList } from "../../store/selectors/lists";
import { fetchColors } from "../../store/actionCreators/colors";
import { getColors } from "../../store/selectors/colors";

import allTasksSvg from "../../assets/img/all-tasks.svg";
import addListSvg from "../../assets/img/add-list-plus.svg";
import deleteListSvg from "../../assets/img/delete-list.svg";
import closeForm from "../../assets/img/close-form.svg";

import "./Sidebar.scss";
import { selectList } from "../../store/reducers/lists";

function Sidebar() {
  const dispatch = useDispatch();
  const [isVisibleForm, setIsVisibleForm] = useState<boolean>(false);
  const [selectedColorId, selectColorid] = useState<number>(1);
  const selectedList = useSelector(getSelectedList);

  const lists = useSelector(getLists);
  const colors = useSelector(getColors);
  const [inputValue, setInputValue] = useState<string>("");

  const toggleIsVisibleForm = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  const onAddList = async (colorId: number) => {
    dispatch(addList(colorId, inputValue));

    clearForm();
    toggleIsVisibleForm();
  };

  const onDeleteList = async (listId: number) => {
    const confirm = window.confirm("Вы действительно хотите удалить список?");
    if (confirm) {
      dispatch(deleteList(listId));
    }
  };

  const onSelectList = (list: List) => {
    dispatch(selectList(list));
  };

  const clearForm = () => {
    setInputValue("");
    selectColorid(1);
  };

  useEffect(() => {
    (async function () {
      dispatch(fetchLists());
      dispatch(fetchColors());
    })();
  }, [dispatch]);

  return (
    <div className="sidebar">
      {lists?.length ? (
        <div className="sidebar__alltasks">
          <img src={allTasksSvg} alt="все задачи" />
          <span>Все задачи</span>
        </div>
      ) : null}
      <div className="sidebar__lists">
        {lists?.map((item) => (
          <Link key={item.id} to={`/lists/${item.id}`}>
            <div
              className={classNames(
                "sidebar__list",
                selectedList?.id === item.id ? "active" : ""
              )}
              key={item.id}
              onClick={() => onSelectList(item)}
            >
              <div
                className="sidebar__list-color"
                style={{ backgroundColor: item?.color?.hex }}
              ></div>
              <span className="sidebar__list-title">{item.name}</span>
              <img
                src={deleteListSvg}
                alt="удалить список"
                onClick={() => onDeleteList(item.id)}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="sidebar__addlist" onClick={toggleIsVisibleForm}>
        <img src={addListSvg} alt="добавить задачу" />
        <span>Добавить список</span>
      </div>
      {isVisibleForm ? (
        <div className="sidebar__form">
          <img
            src={closeForm}
            alt="закрыть форму"
            className="sidebar__form-close"
            onClick={toggleIsVisibleForm}
          />
          <input
            type="text"
            placeholder="Название списка"
            className="sidebar__form-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="sidebar__form-colors">
            {colors?.map((item) => (
              <div
                style={{ backgroundColor: item.hex }}
                className={classNames(
                  "sidebar__form-color",
                  selectedColorId === item.id ? "active" : ""
                )}
                onClick={() => selectColorid(item.id)}
                key={item.id}
              ></div>
            ))}
          </div>
          <button
            className="sidebar__form-btn"
            onClick={() => onAddList(selectedColorId)}
          >
            Добавить
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
