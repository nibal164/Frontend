import SubCategoriesService from "../../services/SubCategoriesServices";
import { removeLoading, setLoading } from "../Actions/loadingActions";
import {
  createSubCategorySuccess,
  deleteSubCategorySuccess,
  getAllSubCategoriesSuccess,
  updateSubCategorySuccess,
} from "../Actions/SubCategoriesActions";

export const getAllSubCategoriesRequest = () => (dispatch: any) => {
  try {
    dispatch(setLoading());
    //API call
    SubCategoriesService.getAllSubCategories().then((response: any) => {
      //dispath
      dispatch(getAllSubCategoriesSuccess(response.data));
      dispatch(removeLoading());
    });
  } catch (error) {
    console.log("error", error);
    dispatch(removeLoading());
  }
};

export const createSubCategoryRequest =
  (subcategory: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      SubCategoriesService.createSubCategory(subcategory).then(
        (response: any) => {
          console.log("response", response);
          dispatch(createSubCategorySuccess(response.data));
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

export const updateSubCategoryRequest =
  (id: number, subcategory: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      SubCategoriesService.updateSubCategory(id, subcategory).then(
        (response: any) => {
          console.log("response", response);
          dispatch(updateSubCategorySuccess(response.data));
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

export const deleteSubCategoryRequest =
  (id: number, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      SubCategoriesService.deleteSubCategory(id).then(
        (response: any) => {
          console.log("response", response);
          dispatch(deleteSubCategorySuccess(response.data.id));
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
