import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainStore from "./pages/MainStore/MainStore";
import Cart from "./pages/Cart/Cart";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
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
