import {
  FETCH_ALL_CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../_constants/actionTypes";

export default (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return action.payload;
    case CREATE_CATEGORY:
      return [...categories, action.payload];
    case DELETE_CATEGORY:
      return categories.filter((service) => service._id !== action.payload);
    case UPDATE_CATEGORY:
      categories.map((cat) =>
        cat._id === action.payload._id ? action.payload : cat
      );
      return;
    default:
      return categories;
  }
};
