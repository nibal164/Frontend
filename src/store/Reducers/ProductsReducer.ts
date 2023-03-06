import {
  GET_ALL_PRODUCTS_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  ADD_PRODUCT_TO_CART,
} from "../Actions/ProductsActions";
const initialState = [] as any;

const ProductReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  let tempArray = [] as any;

  switch (type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return payload;

    case CREATE_PRODUCT_SUCCESS:
      // return the precious state and the newly created one
      return [...state, payload];

    case DELETE_PRODUCT_SUCCESS:
      tempArray = state.filter((product: any) => product.id !== payload);
      return tempArray;

    case UPDATE_PRODUCT_SUCCESS:
      let array = [...state];
      array.map((product: any, index: number) => {
        if (product.id == payload.id) {
          array[index] = payload;
        }
      });
      return array;

    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};

export default ProductReducer;
