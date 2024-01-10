import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAuthor = () => {
  const [fullName, setFullName] = useState("");
  const nav = useNavigate();
  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        console.log("✅EditAuthor: oneAuthor gotten successfully!", res.data);
        setFullName(res.data.fullName);
      })
      .catch((err) => console.log("❌EditAuthor: something went wrong!", err));
  }, []);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .put(
        "http://localhost:8000/api/authors/" + id,
        {
          fullName,
        },
        { new: true, runValidators: true }
      )
      .then((res) => {
        console.log("✅EditAuthor: Author editted successfully!", res);
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
        <h1>Edit This Author</h1>
        <div>
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
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

export default EditAuthor;
