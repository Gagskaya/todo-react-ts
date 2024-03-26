import { AppDispatch } from "..";

import { setColors } from "../reducers/colors";
import { colorsApi } from "../../services/api/colors";

export const toggleCompleted = () => async (dispatch: AppDispatch) => {
  try {
    const colors = await colorsApi.fetchColors();

    dispatch(setColors(colors));
  } catch (e) {
    console.log(e);
  }
};
