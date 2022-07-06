import React, { useEffect, useState } from "react";
import Axios from "axios";

function Mens() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://fakestoreapi.com/products/category/men's clothing"
      //   "https://fakestoreapi.com/products"
    ).then((response) => {
      console.log("responseeeee", response.data);
      setProducts(response.data);
    });
    console.log("category ", products.category);
  }, []);

  return (
    <div className="container">
      {/* container : background set up */}
      {products.map((values) => {
        return (
          <div className="product-card">
            <div className="flexTop">
              <img src={values.image} />
            </div>
            <div className="flexBottom">
              <p className="categories"> {values.category}</p>
              <h5> {values.title} </h5>
              <p> ${values.price} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Mens;
