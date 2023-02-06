import "./Cart.css";
import Header from "../../components/Header/Header";
import React, { useState, useEffect } from "react";

function Cart() {
  const selectedproducts = [] as any;
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("Cart updated: ", cart);
  }, [cart]);
  // const handleAddToCart = (item) => {
  //   setCart([...cart, item]);
  // };
  return (
    <div>
      <Header />
      <div className="title-store-store">
        <h1 className="title-store">Cart</h1>
        {selectedproducts.length <= 0 ? (
          "There are no selected products"
        ) : (
          <div>{selectedproducts.map((product: any, index: any) => {})}</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
