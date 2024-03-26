import { combineReducers } from "@reduxjs/toolkit";

import { listsReducer } from "./lists";
import { colorsReducer } from "./colors";
import { tasks } from "./tasks";

export const rootReducer = combineReducers({
  listsReducer,
  colorsReducer,
});
