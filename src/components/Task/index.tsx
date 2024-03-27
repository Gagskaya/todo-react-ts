import { useState } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import { TaskI } from "../../types/tasks";
import { tasksApi } from "../../services/api/tasks";
import { useAppDispatch } from "../../store";
import { fetchLists } from "../../store/actionCreators/lists";

import checkedSvg from "../../assets/img/checked.svg";
import deleteSvg from "../../assets/img/delete-list.svg";

import "./Task.scss";
import { deleteTask } from "../../store/actionCreators/tasks";

const Task = ({ text, completed, id, listId }: TaskI) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [isCompleted, setIsCompleted] = useState(completed);

  const onCheckboxClick = async (taskId: string) => {
    if (location.pathname === "/") {
      return;
    } else {
      if (isCompleted) {
        setIsCompleted(false);
        await tasksApi.toggleCompleted(taskId, false);
        dispatch(fetchLists());
      } else {
        setIsCompleted(true);
        await tasksApi.toggleCompleted(taskId, true);
        dispatch(fetchLists());
      }
    }
  };

  const onDeleteTask = () => {
    const confirm = window.confirm("Вы действительно хотите удалить задачу?");
    if (confirm) {
      dispatch(deleteTask(id, listId));
    }
  };
  return (
    <div className="task">
      <div
        className={classNames(
          "task__checkbox",
          isCompleted ? "checked" : "",
          location.pathname === "/" ? "disabled" : ""
        )}
        onClick={() => onCheckboxClick(id)}
      >
        <img src={checkedSvg} alt="галочка" />
      </div>
      <h2 className="task__text">{text}</h2>
      <img
        src={deleteSvg}
        alt="удалить"
        className="task__delete"
        onClick={onDeleteTask}
        style={
          location.pathname === "/" ? { display: "none" } : { display: "block" }
        }
      />
    </div>
  );
};

export default Task;
