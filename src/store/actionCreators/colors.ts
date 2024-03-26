import { Dispatch } from "@reduxjs/toolkit";
import { setColors } from "../reducers/colors";
import { colorsApi } from "../../services/api/colors";

export const fetchColors = () => async (dispatch: Dispatch) => {
  try {
    const colors = await colorsApi.fetchColors();
    console.log(colors);

    dispatch(setColors(colors));
  } catch (e) {
    console.log(e);
  }
};
