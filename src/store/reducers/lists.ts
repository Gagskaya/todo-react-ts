import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List } from "../../types/lists";

interface listsState {
  lists: List[];
  selectedlist: List;
}

const initialState: listsState = {
  lists: [],
  selectedlist: {} as List,
};

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setLists(state, action: PayloadAction<List[]>) {
      state.lists = action.payload;
    },
    selectList(state, action: PayloadAction<List>) {
      state.selectedlist = action.payload;
    },
  },
});

export const { setLists, selectList } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
