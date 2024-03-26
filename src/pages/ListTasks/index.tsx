import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSelectedList } from "../../store/selectors/lists";
import { fetchListById } from "../../store/actionCreators/lists";

import Task from "../../components/Task";

import "./ListTasks.scss";
import ListTitle from "../../components/ListTitle";

const ListTasks = () => {
  const selectedList = useSelector(getSelectedList);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListById(id));
  }, []);
  return (
    <div className="list-tasks">
      <ListTitle title={selectedList?.name} color={selectedList?.color.hex} />
      {selectedList?.tasks?.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  );
};

export default ListTasks;
