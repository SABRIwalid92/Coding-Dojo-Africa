import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log("EditProduct: got Product successfully ✅", res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log("❌ something wrong with OneProduct!!", err));
  }, []);
  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log("Product Updated!", res.data);
        nav("/");
      })
      .catch((err) => console.log("error with EditProduct!", err));
  };
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
    <div>
      <h1>Edit Product</h1>
      <form
        className="d-flex flex-column align-items-center gap-3"
        onSubmit={submitHandle}
      >
        <div>
          <label className="text-primary">Title </label>
          <input
            className="shadow-sm rounded"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div>
          <label className="text-success">Price </label>
          <input
            className="shadow-sm rounded"
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />{" "}
          $
        </div>
        <div>
          <label>Description </label>
          <textarea
            className="shadow-sm rounded"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            cols="30"
            rows="2"
          ></textarea>
        </div>
        <button>Edit</button>
        <button
          className="btn bg-danger border p-0 "
          onClick={() => deleteProduct(id)}
        >
          🗑️
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
