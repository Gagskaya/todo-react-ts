import { useState } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import { TaskI } from "../../types/tasks";
import { tasksApi } from "../../services/api/tasks";

import checkedSvg from "../../assets/img/checked.svg";

import "./Task.scss";

const Task = ({ text, completed, id }: TaskI) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const location = useLocation();

  const onCheckboxClick = async (taskId: string) => {
    console.log(location);
    if (location.pathname === "/") {
      return;
    } else {
      if (isCompleted) {
        setIsCompleted(false);
        await tasksApi.toggleCompleted(taskId, false);
      } else {
        setIsCompleted(true);
        await tasksApi.toggleCompleted(taskId, true);
      }
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
    </div>
  );
};

export default Task;
