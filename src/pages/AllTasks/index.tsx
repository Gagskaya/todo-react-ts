import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getLists } from "../../store/selectors/lists";
import { useAppDispatch } from "../../store";
import { fetchLists } from "../../store/actionCreators/lists";

import Task from "../../components/Task";
import ListTitle from "../../components/ListTitle";

import "./AllTasks.scss";

const AllTasks = () => {
  const dispatch = useAppDispatch();
  const lists = useSelector(getLists);

  useEffect(() => {
    dispatch(fetchLists());
  }, []);
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
