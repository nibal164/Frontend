import { HttpCommon } from "./Http-common";

const getAllSubCategories = () => {
  return HttpCommon.get("SubCategories");
};

const createSubCategory = (subcategory: any) => {
  return HttpCommon.post("SubCategories", subcategory);
};

const deleteSubCategory = (id: number) => {
  return HttpCommon.delete(`SubCategories/${id}`);
};

const updateSubCategory = (id: number, subcategory: any) => {
  return HttpCommon.put(`SubCategories/${id}`, subcategory);
};

const SubCategoriesService = {
  getAllSubCategories,
  createSubCategory,
  deleteSubCategory,
  updateSubCategory,
};

export default SubCategoriesService;
