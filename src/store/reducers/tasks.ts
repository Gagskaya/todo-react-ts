import { createSlice } from "@reduxjs/toolkit";

interface tasksState {}

const initialState: tasksState = {};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const {} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
