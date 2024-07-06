import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setusers] = useState([
    { id: 0, user: "Ashish", city: "USA" },
    { id: 1, user: "Sharma", city: "INDIA" },
    { id: 2, user: "Pooja", city: "DELHI" },
  ]);

 
  return (
    <UserContext.Provider value={{ users, setusers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
