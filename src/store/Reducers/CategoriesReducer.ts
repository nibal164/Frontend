import {
  GET_ALL_CATEGORIES_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
} from "../Actions/CategoriesActions";
const initialState = [] as any;

const CategoriesReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  let tempArray = [] as any;

  switch (type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      return payload;

    case CREATE_CATEGORY_SUCCESS:
      // return the precious state and the newly created one
      return [...state, payload];

    case DELETE_CATEGORY_SUCCESS:
      tempArray = state.filter((category: any) => category.id !== payload);
      return tempArray;

    case UPDATE_CATEGORY_SUCCESS:
      let array = [...state];
      array.map((category: any, index: number) => {
        if (category.id == payload.id) {
          array[index] = payload;
        }
      });
      return array;

    default:
      return state;
  }
};

export default CategoriesReducer;
