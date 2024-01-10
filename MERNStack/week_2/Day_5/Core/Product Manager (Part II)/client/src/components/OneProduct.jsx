import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log("OneProduct got Product successfully ✅", res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log("❌ something wrong with OneProduct!!", err));
  }, []);
  return (
    <div className="border border-dark rounded m-3 p-3">
      <p className="shadow-lg rounded">{product.title}</p>
      <p className="shadow-lg rounded">{product.price} $</p>
      <p className="shadow-lg rounded">{product.description}</p>
    </div>
  );
};

export default OneProduct;
