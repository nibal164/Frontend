import React from "react";
import "./SubCategories.css";
import data from "../../../ProductsCat.json";
import { Link } from "react-router-dom";

function SubCategories() {
  const categories = data["categories"];
  const subCategories = data["subCategories"];

  return (
    <div className="sub-category-container">
      {categories.map((category, index) =>
        subCategories.map((SCategory) => (
          <Link
            to={`/store/${category.id}/${SCategory.id}`}
            className="sub-category-item"
            key={SCategory.id}
          >
            {index === 0 && (
              <div className="sub-category-div">{SCategory.name}</div>
            )}
          </Link>
        ))
      )}
    </div>
  );
}

export default SubCategories;
