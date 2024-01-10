import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const OneProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log("OneProduct got Product successfully ✅", res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log("❌ something wrong with OneProduct!!", err));
  }, []);
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        nav("/");
      })
      .catch((err) => console.log(err.data));
  };
  return (
    <div className="border border-dark rounded m-3 p-3">
      <p className="shadow-lg rounded">{product.title}</p>
      <p className="shadow-lg rounded">{product.price} $</p>
      <p className="shadow-lg rounded">{product.description}</p>
      <div>
        <Link
          className="btn bg-primary border p-0 "
          to={`/product/${product._id}/edit`}
        >
          ✏️
        </Link>
        <button
          className="btn bg-danger border p-0 "
          onClick={() => deleteProduct(id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default OneProduct;
