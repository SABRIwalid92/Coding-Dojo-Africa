import "./App.css";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import Display from "./components/Display";
import Er404 from "./components/er404";

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/404" element={<Er404 />} />
        <Route path="/:group/:id" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
