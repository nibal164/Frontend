import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Store.css";
import CategoriesCategories from "../../ProductsCat.json";

//images

function Store() {
  const categories = CategoriesCategories["categories"];
  return (
    <div id="Store">
      <h1 className="title">Store</h1>
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
      </div>
    </div>
  );
}

export default Store;
