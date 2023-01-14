import {
  GET_ALL_SUBCATEGORIES_SUCCESS,
  CREATE_SUBCATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_SUCCESS,
  UPDATE_SUBCATEGORY_SUCCESS,
} from "../Actions/SubCategoriesActions";
const initialState = [] as any;

const SubCategoriesReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  let tempArray = [] as any;

  switch (type) {
    case GET_ALL_SUBCATEGORIES_SUCCESS:
      return payload;

    case CREATE_SUBCATEGORY_SUCCESS:
      // return the precious state and the newly created one
      return [...state, payload];

    case DELETE_SUBCATEGORY_SUCCESS:
      tempArray = state.filter(
        (subcategory: any) => subcategory.id !== payload
      );
      return tempArray;

    case UPDATE_SUBCATEGORY_SUCCESS:
      let array = [...state];
      array.map((subcategory: any, index: number) => {
        if (subcategory.id == payload.id) {
          array[index] = payload;
        }
      });
      return array;

    default:
      return state;
  }
};

export default SubCategoriesReducer;
