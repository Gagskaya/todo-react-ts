import { Route, Routes } from "react-router-dom";

import AllTasks from "../../pages/AllTasks";
import ListTasks from "../../pages/ListTasks";

import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/lists/:id" element={<ListTasks />} />
      </Routes>
    </div>
  );
};

export default Main;
