export const GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES_SUCCESS";
export const getAllCategoriesSuccess = (categories: any) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload: categories,
});

export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const createCategorySuccess = (category: any) => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload: category,
});

export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const deleteCategorySuccess = (id: number) => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload: id,
});

export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const updateCategorySuccess = (category: any) => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload: category,
});
