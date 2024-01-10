import "./App.css";
import CreateProduct from "./components/CreateProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProducts from "./components/ListProducts";
import { Link, Route, Routes } from "react-router-dom";
import OneProduct from "./components/OneProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="App bg-warning bg-opacity-10">
      <Link className="bg-warning btn shadow-sm py-0 px-3 my-1 " to={"/"}>
        HOME
      </Link>
      <Routes>
        <Route
          path="*"
          element={
            <div className="d-flex justify-content-around ">
              <CreateProduct /> <ListProducts />
            </div>
          }
        />
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/product/:id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
