import { FETCH_ALL_CONTACT } from "../_constants/actionTypes";

export default (contacts = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CONTACT:
      return action.payload;
    default:
      return contacts;
  }
};
