import React from "react";
import { useSelector } from "react-redux";

import { getLists } from "../../store/selectors/lists";

import Task from "../../components/Task";
import ListTitle from "../../components/ListTitle";

import "./AllTasks.scss";

const AllTasks = () => {
  const lists = useSelector(getLists);
  return (
    <div className="all-tasks">
      {lists?.map((list) => (
        <React.Fragment key={list.id}>
          <ListTitle title={list.name} color={list?.color?.hex} />
          {list?.tasks?.map((task) => (
            <Task {...task} key={task.id} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllTasks;
