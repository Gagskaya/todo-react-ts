import { AppDispatch } from "..";
import { listsApi } from "../../services/api/lists";

import { tasksApi } from "../../services/api/tasks";
import { TaskI } from "../../types/tasks";
import { fetchListById } from "./lists";

export const addTask = (task: TaskI) => async (dispatch: AppDispatch) => {
  try {
    await tasksApi.addTask(task);
    const lists = await listsApi.fetchListById(task.listId);
    console.log(lists);

    dispatch(fetchListById(task.listId));
  } catch (e) {
    console.log(e);
  }
};
