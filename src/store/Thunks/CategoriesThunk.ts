import CategoriesService from "../../services/CategoriesService";
import { removeLoading, setLoading } from "../Actions/loadingActions";
import {
  createCategorySuccess,
  deleteCategorySuccess,
  getAllCategoriesSuccess,
  updateCategorySuccess,
} from "../Actions/CategoriesActions";

export const getAllCategoriesRequest = () => (dispatch: any) => {
  try {
    dispatch(setLoading());
    //API call
    CategoriesService.getAllCategories().then((response: any) => {
      //dispath
      dispatch(getAllCategoriesSuccess(response.data));
      dispatch(removeLoading());
    });
  } catch (error) {
    console.log("error", error);
    dispatch(removeLoading());
  }
};

export const createCategoryRequest =
  (category: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      CategoriesService.createCategory(category).then(
        (response: any) => {
          console.log("response", response);
          dispatch(createCategorySuccess(response.data));
          //only close the pop up when the response is success
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };

export const updatecategoryRequest =
  (id: number, category: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      CategoriesService.updateCategory(id, category).then(
        (response: any) => {
          console.log("response", response);
          dispatch(updateCategorySuccess(response.data));
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };

export const deletecategoryRequest =
  (id: number, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      CategoriesService.deleteCategory(id).then(
        (response: any) => {
          console.log("response", response);
          dispatch(deleteCategorySuccess(response.data.id));
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };
