import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const nav = useNavigate();
  const [group, setGroup] = useState("");
  const [id, setId] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    if (id <= 0 || !group) {
      nav("/404");
    } else {
      nav(`/${group}/${id}`);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label> Search For:</label>

      <select
        onChange={(e) => {
          setGroup(e.target.value);
        }}
      >
        <option value=""></option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>

      <label style={{ marginLeft: "10px" }}>ID</label>
      <input
        type="number"
        style={{ width: "20px", margin: "0 30px 0 4px" }}
        onChange={(e) => {
          setId(e.target.value === 0 ? NaN : e.target.value);
        }}
      />
      <input type="submit" style={{ padding: "0 15px" }} />
    </form>
  );
};

export default Search;
