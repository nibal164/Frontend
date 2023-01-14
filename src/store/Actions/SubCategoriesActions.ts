//get all teachers: if it was success it will return the success key and the payload containing the teachers
export const GET_ALL_SUBCATEGORIES_SUCCESS = "GET_ALL_SUBCATEGORIES_SUCCESS";
export const getAllSubCategoriesSuccess = (subcategories: any) => ({
  type: GET_ALL_SUBCATEGORIES_SUCCESS,
  payload: subcategories,
});

export const CREATE_SUBCATEGORY_SUCCESS = "CREATE_SUBCATEGORY_SUCCESS";
export const createSubCategorySuccess = (subcategory: any) => ({
  type: CREATE_SUBCATEGORY_SUCCESS,
  payload: subcategory,
});

export const DELETE_SUBCATEGORY_SUCCESS = "DELETE_SUBCATEGORY_SUCCESS";
export const deleteSubCategorySuccess = (id: number) => ({
  type: DELETE_SUBCATEGORY_SUCCESS,
  payload: id,
});

export const UPDATE_SUBCATEGORY_SUCCESS = "UPDATE_SUBCATEGORY_SUCCESS";
export const updateSubCategorySuccess = (subcategory: any) => ({
  type: UPDATE_SUBCATEGORY_SUCCESS,
  payload: subcategory,
});
