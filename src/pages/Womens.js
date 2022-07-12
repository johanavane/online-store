import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Womens() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://fakestoreapi.com/products/category/women's clothing"
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
              {/* <a href={`/item/${values.id}`}>id</a> */}
              {/* <a href={{ pathname: `/item/${values.id}`, state: values }}>id</a> */}
              <Link to={{ pathname: `/Item/${values.id}`, state: values }}>
                <img src={values.image} />
              </Link>
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

export default Womens;
