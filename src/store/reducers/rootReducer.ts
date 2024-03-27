import { combineReducers } from "@reduxjs/toolkit";

import { listsReducer } from "./lists";
import { colorsReducer } from "./colors";
import { tasksReducer } from "./tasks";

export const rootReducer = combineReducers({
  listsReducer,
  colorsReducer,
  tasksReducer,
});
