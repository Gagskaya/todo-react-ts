import axios from "axios";
import { API_URL } from "../../constants";

export const listsApi = {
  async fetchLists() {
    const { data } = await axios.get(
      `${API_URL}/lists?_embed=color&_embed=tasks`
    );

    return data;
  },
  async fetchListById(listId: string | undefined) {
    const { data } = await axios.get(
      `${API_URL}/lists/${listId}?_embed=color&_embed=tasks`
    );

    return data;
  },
  // async fetchAllTasks() {
  //   const { data } = await axios.get(
  //     `${API_URL}/lists?_embed=color&_embed=tasks`
  //   );

  //   return data;
  // },
  async addList(colorId: number, name: string) {
    await axios.post(`${API_URL}/lists`, {
      name,
      colorId,
    });
  },
  async deleteList(listId: number) {
    await axios.delete(`${API_URL}/lists/${listId}`);
  },
};
