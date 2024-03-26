import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List } from "../../types/lists";

interface listsState {
  lists: List[];
  selectedlist: List | null;
}

const initialState: listsState = {
  lists: [],
  selectedlist: null,
};

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setLists(state, action: PayloadAction<List[]>) {
      state.lists = action.payload;
    },
    selectList(state, action: PayloadAction<List | null>) {
      state.selectedlist = action.payload;
    },
  },
});

export const { setLists, selectList } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
