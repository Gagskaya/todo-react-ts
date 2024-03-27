import { useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store";
import { addTask } from "../../store/actionCreators/tasks";
import { getSelectedList } from "../../store/selectors/lists";

import plusSvg from "../../assets/img/add-list-plus.svg";

import "./AddTask.scss";

interface Props {
  listId: string;
}

const AddTask = ({ listId }: Props) => {
  const dispatch = useAppDispatch();

  const [isVisibleForm, setIsVisibleForm] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const toggleForm = () => {
    setInputValue("");
    setIsVisibleForm(!isVisibleForm);
  };

  const onSubmitForm = () => {
    dispatch(addTask({ text: inputValue, completed: false, listId }));

    toggleForm();
  };
  if (isVisibleForm) {
    return (
      <h2 className="add-task" onClick={toggleForm}>
        <img src={plusSvg} alt="новая задача" />
        <span>Новая задача</span>
      </h2>
    );
  } else {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Текст задачи"
          className="form__input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="form__btns">
          <button
            className="form__btns-add"
            onClick={onSubmitForm}
            disabled={!inputValue.length}
          >
            Добавить задачу
          </button>
          <button className="form__btns-cancel" onClick={toggleForm}>
            Отмена
          </button>
        </div>
      </div>
    );
  }
};

export default AddTask;
