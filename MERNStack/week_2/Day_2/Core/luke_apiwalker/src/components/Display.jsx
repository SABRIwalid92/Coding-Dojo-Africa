import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisplayPeople from "./DisplayPeople";
import DisplayPlanets from "./DisplayPlanets";
import Er404 from "./er404";

const Display = () => {
  const { group, id } = useParams();
  const [obj, setObj] = useState(null);
  const objFetch = () => {
    fetch(`https://swapi.dev/api/${group}/${id}/`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      })
      .then((response) => {
        setObj(response);
      })
      .catch((error) => {
        console.log("errooooooor!!!!", error);
      });
  };
  useEffect(() => {
    objFetch();
  }, [obj]);
  return (
    <>
      {group === "people" ? (
        <DisplayPeople obj={obj} />
      ) : group === "planets" ? (
        <DisplayPlanets obj={obj} />
      ) : (
        <Er404 />
      )}
    </>
  );
};

export default Display;
