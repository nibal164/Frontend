import ProductsService from "../../services/ProductsService";
import { removeLoading, setLoading } from "../Actions/loadingActions";
import {
  createProductSuccess,
  deleteProductSuccess,
  getAllProductsSuccess,
  updateProductSuccess,
} from "../Actions/ProductsActions";

export const getAllProductsRequest = () => (dispatch: any) => {
  try {
    dispatch(setLoading());

    //API call
    ProductsService.getAllProducts().then((response: any) => {
      //dispatch
      dispatch(getAllProductsSuccess(response.data));
      dispatch(removeLoading());
    });
  } catch (error) {
    console.log("error", error);
    dispatch(removeLoading());
  }
};

export const createProductRequest =
  (product: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      ProductsService.createProduct(product).then(
        (response: any) => {
          console.log("response", response);
          dispatch(createProductSuccess(response.data));
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

export const updateProductRequest =
  (id: number, product: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      ProductsService.updateProduct(id, product).then(
        (response: any) => {
          console.log("response", response);
          dispatch(updateProductSuccess(response.data));
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

export const deleteProductRequest =
  (id: number, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      ProductsService.deleteProduct(id).then(
        (response: any) => {
          console.log("response", response);
          dispatch(deleteProductSuccess(response.data.id));
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
