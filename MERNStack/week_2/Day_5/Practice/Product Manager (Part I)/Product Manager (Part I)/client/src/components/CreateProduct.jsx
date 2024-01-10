import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => console.log("Product Created!", res.data))
      .catch((err) => console.log("error with CreateProduct!", err));
  };
  return (
    <div>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
