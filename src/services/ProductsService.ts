import { HttpCommon } from "./Http-common";

const getAllProducts = () => {
  return HttpCommon.get("Products");
};

const createProduct = (product: any) => {
  return HttpCommon.post("Products", product);
};

const deleteProduct = (id: number) => {
  return HttpCommon.delete(`Products/${id}`);
};

const updateProduct = (id: number, product: any) => {
  return HttpCommon.put(`Products/${id}`, product);
};

const ProductsService = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};

export default ProductsService;
