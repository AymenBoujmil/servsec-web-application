import { combineReducers } from "redux";
import users from "./users";
import services from "./services";
import categories from "./categories";
import auth from "./auth";

export default combineReducers({
  users,
  services,
  auth,
  categories,
});
