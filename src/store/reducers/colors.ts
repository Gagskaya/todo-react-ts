import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color } from "../../types/colors";

interface colorsState {
  colors: Color[];
}

const initialState: colorsState = {
  colors: [],
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setColors(state, action: PayloadAction<Color[]>) {
      state.colors = action.payload;
    },
  },
});

export const { setColors } = colorsSlice.actions;
export const colorsReducer = colorsSlice.reducer;
