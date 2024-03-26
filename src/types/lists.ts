import { Color } from "./colors";
import { Task } from "./tasks";

export interface List {
  id: number;
  name: string;
  colorId: number;
  color: Color;
  tasks?: Task[];
}
