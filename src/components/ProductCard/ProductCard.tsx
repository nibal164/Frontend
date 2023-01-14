import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

type ProductCardProps = {
  name: string;
  image: any;
  id: string;
};

function ProductCard(props: ProductCardProps) {
  return (
    <Link to={`/store/${props.id}`}>
      <article className="card">
        <img src={props.image} alt={props.name} className="card_image"></img>
        <h1 className="category-specification">{props.name}</h1>
      </article>
    </Link>
  );
}

export default ProductCard;
