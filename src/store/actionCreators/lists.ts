import { listsApi } from "../../services/api/lists";
import { selectList, setLists } from "../reducers/lists";
import { AppDispatch } from "..";

export const fetchLists = () => async (dispatch: AppDispatch) => {
  try {
    const lists = await listsApi.fetchLists();

    dispatch(setLists(lists));
  } catch (e) {
    console.log(e);
  }
};

export const fetchListById =
  (listId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      const list = await listsApi.fetchListById(listId);

      dispatch(selectList(list));
    } catch (e) {
      console.log(e);
    }
  };
export const fetchAllTasks = () => async (dispatch: AppDispatch) => {
  try {
    const lists = await listsApi.fetchLists();

    dispatch(setLists(lists));
  } catch (e) {
    console.log(e);
  }
};
export const deleteList = (listId: string) => async (dispatch: AppDispatch) => {
  try {
    await listsApi.deleteList(listId);
    dispatch(fetchLists());
  } catch (e) {
    console.log(e);
  }
};
export const addList =
  (colorId: number, name: string) => async (dispatch: AppDispatch) => {
    try {
      await listsApi.addList(colorId, name);
      dispatch(fetchLists());
    } catch (e) {
      console.log(e);
    }
  };

export const editListTitle =
  (listId: string | undefined, title: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      await listsApi.editListTitle(listId, title);
      // dispatch(fetchLists());
      dispatch(fetchLists());
      dispatch(fetchListById(listId));
    } catch (e) {
      console.log(e);
    }
  };
