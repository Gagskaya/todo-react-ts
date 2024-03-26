import { RootState } from "../index";

export const getLists = ({ listsReducer }: RootState) => listsReducer.lists;
export const getSelectedList = ({ listsReducer }: RootState) =>
  listsReducer.selectedlist;
