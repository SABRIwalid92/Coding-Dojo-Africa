import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log("✅AuthorList: authors gotten successfully!", res.data);
        setAuthors(res.data);
      })
      .catch((err) =>
        console.log("❌✅AuthorList: something went wrong!", err)
      );
  }, []);
  const deleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        const filteredAuthors = authors.filter((author) => author._id !== id);
        setAuthors(filteredAuthors);
      })
      .catch((err) => console.log("❌you have an error on deleteAuthor", err));
  };
  return (
    <div>
      <h1 className="display-5 ">Authors List</h1>
      <Link to={"/authors/new"}>Add An Author</Link>
      <table className="border table table-striped">
        <thead>
          <tr>
            <td className="bg-info bg-opacity-10">Author</td>
            <td className="bg-success bg-opacity-50">Actions Available</td>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>{author.fullName}</td>
              <td>
                <Link
                  className="btn p-1 mx-1 border border-2 border-dark"
                  to={`/authors/${author._id}/edit`}
                >
                  ✏️
                </Link>
                <button onClick={() => deleteAuthor(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsList;
