import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AuthorsList from "./components/AuthorsList";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <div className="App">
      <h1 className="display-1">Favorite Authors📘</h1>
      <Routes>
        <Route path="/" element={<AuthorsList />} />
        <Route path="/authors" element={<AuthorsList />} />
        <Route path="/authors/new" element={<NewAuthor />} />
        <Route path="/authors/:id/edit" element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
