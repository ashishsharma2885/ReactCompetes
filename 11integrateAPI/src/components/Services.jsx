import axios from "../utils/axios";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setfirst] = useState("this in normal data");
  const [second, setsecond] = useState("this is very large data");

  const getUser= () => {

    axios
      .get("/users")
      .then((users) => {
       console.log(users)   
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
    console.log("Service Component is Created!");

    return () => {
      console.log("Services Component is Deleted");
    };
  }, [second]);

  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setfirst("Normal Data has been Changed")}
        className="rounded mb-10 bg-red-100 p-2"
      >
        Change Normal Data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setsecond("large  Data has been Changed")}
        className="rounded mb-10 bg-blue-100 p-2"
      >
        change Large Data
      </button>
    </div>
  );
};

export default Services;
