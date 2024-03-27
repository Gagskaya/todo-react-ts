import { AppDispatch } from "..";

import { tasksApi } from "../../services/api/tasks";
import { TaskI } from "../../types/tasks";
import { fetchListById, fetchLists } from "./lists";

export const addTask = (task: TaskI) => async (dispatch: AppDispatch) => {
  try {
    await tasksApi.addTask(task);

    dispatch(fetchListById(task.listId));
  } catch (e) {
    console.log(e);
  }
};
export const deleteTask =
  (taskId: string, listId: string | undefined) =>
  async (dispatch: AppDispatch) => {
    try {
      await tasksApi.deleteTask(taskId);

      dispatch(fetchListById(listId));
    } catch (e) {
      console.log(e);
    }
  };
