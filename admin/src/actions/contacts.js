import * as api from "../api/index.js";
import { FETCH_ALL_CONTACT } from "../_constants/actionTypes";

// export const createContact = (formData) => async (dispatch) =>
// {
//     try {
//         const { data } = await api.createContact(formData);
//        // dispatch({ type : AUTH,data});
//         dispatch({ type : CREATE_CONTACT , payload : data});
//     } catch (error) {
//       if (error.response && error.response.data) {
//         dispatch({type:"ERROR",payload:error.response.data.message});
//       }
//     }
// }
export const getContacts = () => async (dispatch) => {
  try {
    console.log("hooiiiiiiiiiii");

    const { data } = await api.fetchContact();
    console.log("hiii");
    console.log(data);
    console.log("hiiiiiiiiiiiiii");
    dispatch({ type: FETCH_ALL_CONTACT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
