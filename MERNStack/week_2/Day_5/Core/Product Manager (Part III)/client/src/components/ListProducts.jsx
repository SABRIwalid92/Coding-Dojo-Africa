import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import OneProduct from "./OneProduct";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log("ListProducts get Products successfully ✅", res.data);
        setProducts(res.data);
      })
      .catch((err) =>
        console.log("❌ something wrong with ListProducts!!", err)
      );
  }, [products]);
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        const filteredProducts = products.filter((p) => p._id !== id);
        setProducts(filteredProducts);
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
      <h1>List Of Products</h1>
      {products.map((product) => (
        <div key={product._id}>
          {/* <OneProduct product={product} /> */}
          <Link
            className="text-decoration-none shadow rounded"
            to={`/product/${product._id}`}
          >
            📦{product.title}📦
          </Link>
          <>
            <Link
              className="btn bg-primary border p-0 "
              to={`/product/${product._id}/edit`}
            >
              ✏️
            </Link>
            <button
              className="btn bg-danger border p-0 "
              onClick={() => deleteProduct(product._id)}
            >
              🗑️
            </button>
          </>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
