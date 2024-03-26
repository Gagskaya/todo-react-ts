import { Dispatch } from "@reduxjs/toolkit";
import { listsApi } from "../../services/api/lists";
import { setLists } from "../reducers/lists";

export const fetchLists = () => async (dispatch: Dispatch) => {
  try {
    const lists = await listsApi.fetchLists();

    dispatch(setLists(lists));
  } catch (e) {
    console.log(e);
  }
};
export const fetchListById = (listId: number) => async (dispatch: Dispatch) => {
  try {
    const lists = await listsApi.fetchListById();

    dispatch(setLists(lists));
  } catch (e) {
    console.log(e);
  }
};
export const deleteList = (listId: number) => async (dispatch: Dispatch) => {
  try {
    await listsApi.deleteList(listId);
    dispatch(fetchLists());
  } catch (e) {
    console.log(e);
  }
};
export const addList =
  (colorId: number, name: string) => async (dispatch: Dispatch) => {
    try {
      await listsApi.addList(colorId, name);
      dispatch(fetchLists());
    } catch (e) {
      console.log(e);
    }
  };
