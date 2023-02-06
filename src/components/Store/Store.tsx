import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Store.css";
import CategoriesCategories from "../../ProductsCat.json";
import { Link } from "react-router-dom";

//images

function Store() {
  const categories = CategoriesCategories["categories"];

  return (
    <div id="Store">
      <h1 className="title">Store Categories</h1>
      <div className="product-card">
        <div className="carrousel">
          {categories.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard name={item.name} image={item.image} id={item.id} />
              </div>
            );
          })}
        </div>
        <div>
          <Link className="see-more-link" to={`/store/1`}>
            <ul className="more">
              <li className="see-more">see more</li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Store;
