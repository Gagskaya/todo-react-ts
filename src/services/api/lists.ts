import axios from "axios";
import { API_URL } from "../../constants";

export const listsApi = {
  async fetchLists() {
    const { data } = await axios.get(
      `${API_URL}/lists?_expand=color&_embed=tasks`
    );

    return data;
  },
  async fetchListById(listId: string | undefined) {
    const { data } = await axios.get(
      `${API_URL}/lists/${listId}?_expand=color&_embed=tasks`
    );

    return data;
  },
  async toggleTaskCheckbox(taskId: string | undefined, completed: boolean) {
    await axios.patch(`${API_URL}/tasks/${taskId}`, {
      completed,
    });
  },

  async addList(colorId: number, name: string) {
    await axios.post(`${API_URL}/lists`, {
      name,
      colorId,
    });
  },
  async deleteList(listId: string | undefined) {
    await axios.delete(`${API_URL}/lists/${listId}`);
  },
  async editListTitle(listId: string | undefined, title: string | null) {
    await axios.patch(`${API_URL}/lists/${listId}`, {
      name: title,
    });
  },
};
