import { Color } from "./colors";
import { TaskI } from "./tasks";

export interface List {
  id: string;
  name: string;
  colorId: number;
  color: Color;
  tasks?: TaskI[];
}
