import { combineReducers } from "redux";
import users from "./users";
import services from "./services";
import categories from "./categories";
import auth from "./auth";
import contact from "./contact";

export default combineReducers({
  users,
  services,
  auth,
  contact,
  categories,
});
