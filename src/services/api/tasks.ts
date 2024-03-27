import axios from "axios";

import { TaskI } from "../../types/tasks";
import { API_URL } from "../../constants";

export const tasksApi = {
  async toggleCompleted(taskId: string | undefined, completed: boolean) {
    await axios.patch(`${API_URL}/tasks/${taskId}`, {
      completed,
    });
  },
  async addTask(task: TaskI) {
    const { data } = await axios.post(`${API_URL}/tasks`, task);
    return data;
  },
  async deleteTask(taskId: string) {
    await axios.delete(`${API_URL}/tasks/${taskId}`);
  },
};
