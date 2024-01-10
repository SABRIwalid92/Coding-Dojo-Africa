import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OneProduct from "./OneProduct";

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
  }, []);
  return (
    <div>
      <h1>List Of Products</h1>
      {products.map((product) => (
        <div key={product._id}>
          {/* <OneProduct product={product} /> */}
          <Link to={`/product/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
