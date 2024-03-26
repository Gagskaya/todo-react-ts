import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import "./App.scss";

function App() {
  return (
    <div className="todo">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
