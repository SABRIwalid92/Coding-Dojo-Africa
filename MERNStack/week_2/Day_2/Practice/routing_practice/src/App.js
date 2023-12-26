import { Route, Routes } from "react-router-dom";
import "./App.css";
import Word from "./components/Word";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<h1>Welcome</h1>} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:color/:bgColor" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;
