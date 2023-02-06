import React from "react";
import { useNavigate } from "react-router";
import "./ProductBox.css";

type ProductBoxProps = {
  id: string;
  img: any;
  name: string;
  description: string;
  ingredients: string;
  price: number;
  categoryId: string;
  subCategoryId: string;
};

function ProductBox(props: ProductBoxProps) {
  const navigate = useNavigate();
  return (
    <div
      className="container"
      onClick={() =>
        navigate(
          `/store/${props.categoryId}/${props.subCategoryId}/${props.id}`
        )
      }
    >
      <div className="card-content">
        <div
          className={
            props.categoryId === "6" || props.categoryId === "4"
              ? "card-content-description notClickable"
              : "card-content-description"
          }
        >
          <img src={props.img} alt={props.name} className="logo" />
          {/* {props.categoryId !== "6" && ( */}
          <div>
            <p className="name">
              <b className="name">{props.name}</b>
            </p>
            {/* <p>{props.price} $</p> */}
          </div>
          {/* )} */}
        </div>

        {/* for description */}
        {/* <div className="card-content-description-specification">
          <h1>
            <b>Description</b>
          </h1>
          <p className="paragraph">{props.description}</p>
          <h1>
            <b>Ingredients</b>
          </h1>
          <p className="paragraph">{props.ingredients}</p>
        </div> */}
      </div>
    </div>
  );
}

export default ProductBox;
