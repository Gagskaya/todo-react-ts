import { TaskI } from "../../types/tasks";

import checkedSvg from "../../assets/img/checked.svg";

import "./Task.scss";

const Task = ({ text }: TaskI) => {
  return (
    <div className="task">
      <div className="task__checkbox checked">
        <img src={checkedSvg} alt="" />
      </div>
      <h2 className="task__text">{text}</h2>
    </div>
  );
};

export default Task;
