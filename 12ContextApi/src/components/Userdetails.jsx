import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useParams } from "react-router-dom";

const Userdetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext)
  console.log(users[id]);
  return 
  <div>
    <h1 className="text-2xl font-bold text-red-200">{users[id].user}
    </h1>
    <h3 className="text-red-400">{users[id].city}</h3>
  </div>;
};

export default Userdetails;
