import "./Cart.css";
import Header from "../../components/Header/Header";
import React, { useState, useEffect } from "react";
// import { addProductToCart } from "../../store/Actions/ProductsActions";
// import { useDispatch } from "react-redux";

function Cart() {
  const cartItems = [] as any;
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("Cart updated: ", cart);
  }, [cart]);
  // const handleAddToCart = (item) => {
  //   setCart([...cart, item]);
  // };

  // const [cartItems, setCartItems] = useState([]);
  // const handleAddProduct = (product) => {
  //   const ProductExist = cartItems.find(item => item.id === product.id);
  //   if (ProductExists) {
  //     setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1}: item))
  //   }
  //   else {
  //     setCartItems([...cartItems, { ...product, quantity: 1}])
  //   }
  // }
  return (
    <div>
      <Header />
      <div className="title-store-store">
        <h1 className="title-store">Cart</h1>
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">There are no selected products</div>
      )}

      <div>
        {cartItems.map((product: any, index: any) => (
          <div className="cart-items-list"></div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
