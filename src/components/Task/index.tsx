import classNames from "classnames";

import { TaskI } from "../../types/tasks";

import checkedSvg from "../../assets/img/checked.svg";

import "./Task.scss";

const Task = ({ text, completed }: TaskI) => {
  const onCheckboxClick = () => {};
  return (
    <div className="task">
      <div className={classNames("task__checkbox", completed ? "checked" : "")}>
        <img src={checkedSvg} alt="" />
      </div>
      <h2 className="task__text">{text}</h2>
    </div>
  );
};

export default Task;
