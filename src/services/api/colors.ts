import axios from "axios";
import { API_URL } from "../../constants";

export const colorsApi = {
  async fetchColors() {
    const { data } = await axios.get(`${API_URL}/colors`);

    return data;
  },
};
