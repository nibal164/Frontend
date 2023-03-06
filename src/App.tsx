import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainStore from "./pages/MainStore/MainStore";
import Cart from "./pages/Cart/Cart";
// import { useState } from "react";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<HomePage />} />
        <Route path="store/:categoryId" element={<MainStore />} />
        <Route
          path="store/:categoryId/:subCategoryId"
          element={<MainStore />}
        />
        <Route
          path="store/:categoryId/:subCategoryId/:productId"
          element={<MainStore />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
