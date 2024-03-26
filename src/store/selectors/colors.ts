import { RootState } from "../index";

export const getColors = ({ colorsReducer }: RootState) => colorsReducer.colors;
