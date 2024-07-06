import React, { useEffect, useState } from "react"
import axios from "../utils/axios";

const Show = () => {
  const [products, setproducts] = useState([]);

  const getProducts = () => {

    axios
      .get("/products")
      .then((products) => {
      //  console.log(products);
        setproducts(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
   getProducts();
  }, []);

  return (
    <>
      <ul className="pt-5">
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="rounded mb-2 p-5 bg-red-200">{p.title}</li>
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
