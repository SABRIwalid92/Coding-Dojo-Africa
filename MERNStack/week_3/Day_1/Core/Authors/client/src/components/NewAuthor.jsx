import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const NewAuthor = () => {
  const [fullName, setFullName] = useState("");
  const nav = useNavigate();
  const [errors, setErrors] = useState([]);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", {
        fullName,
      })
      .then((res) => {
        console.log(res);
        nav("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        console.log(err);
        setErrors(errorResponse);
      });
  };
  return (
    <div>
      <form className="container" onSubmit={onSubmitHandle}>
        <h1>Add a New Author</h1>
        <div>
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <p className="text-danger"> {errors.fullName.message} </p>
          )}
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={() => nav("/")}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAuthor;
