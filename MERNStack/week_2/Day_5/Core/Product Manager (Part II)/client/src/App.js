import "./App.css";
import CreateProduct from "./components/CreateProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProducts from "./components/ListProducts";
import { Link, Route, Routes } from "react-router-dom";
import OneProduct from "./components/OneProduct";

function App() {
  return (
    <div className="App">
      <Link className="bg-warning btn shadow-sm py-0 px-3 my-1 " to={"/"}>
        HOME
      </Link>
      <Routes>
        <Route
          path="*"
          element={
            <div>
              <CreateProduct /> <ListProducts />
            </div>
          }
        />
        <Route path="/product/:id" element={<OneProduct />} />
      </Routes>
    </div>
  );
}

export default App;
