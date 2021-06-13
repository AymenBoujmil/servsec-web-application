import * as api from "../api/index.js";
import {
  FETCH_ALL_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../_constants/actionTypes";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();
    console.log(data);

    dispatch({ type: FETCH_ALL_CATEGORIES, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = (formData, history) => async (dispatch) => {
  try {
    console.log("wsel");
    const { data } = await api.createCategory(formData);
    console.log(data);
    console.log("ay haja ");
    dispatch({ type: CREATE_CATEGORY, payload: data });
    console.log(data);
    history.push("/categories");
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch({ type: "ERROR", payload: error.response.data.message });
    }
  }
};

export const deleteCategoory = (id, history) => async (dispatch) => {
  try {
    const { data } = await api.deleteCategorie(id);
    dispatch({ type: DELETE_CATEGORY, payload: id });
    history.push("/categories");
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch({ type: "ERROR", payload: error.response.data.message });
    }
  }
};
export const updateCategory = (id, category, history) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(id, category);
    dispatch({ type: UPDATE_CATEGORY, payload: data });
    history.push("/categories");
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch({ type: "ERROR", payload: error.response.data.message });
    }
  }
};
