import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import loadingReducer from "./loadingReducer";
import CategoriesReducer from "./CategoriesReducer";
import SubCategoriesReducer from "./SubCategoriesReducer";

export default combineReducers({
  ProductsReducer,
  loadingReducer,
  CategoriesReducer,
  SubCategoriesReducer,
});

export type rootReducer = ReturnType<typeof combineReducers>;
