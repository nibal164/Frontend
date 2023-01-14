import { HttpCommon } from "./Http-common";

const getAllCategories = () => {
  return HttpCommon.get("Categories");
};

const createCategory = (category: any) => {
  return HttpCommon.post("Categories", category);
};

const deleteCategory = (id: number) => {
  return HttpCommon.delete(`Categories/${id}`);
};

const updateCategory = (id: number, category: any) => {
  return HttpCommon.put(`Categories/${id}`, category);
};

const CategoriesService = {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};

export default CategoriesService;
