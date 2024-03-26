import { combineReducers } from "@reduxjs/toolkit";

import { listsReducer } from "./lists";
import { colorsReducer } from "./colors";

export const rootReducer = combineReducers({
  listsReducer,
  colorsReducer,
});
