import {CREATE_CONTACT} from '../_constants/actionTypes';

export default (contacts=[],action)=>{
  switch (action.type) {
      case CREATE_CONTACT:
        return [...contacts,action.payload];
      default:
        return contacts;
  }
}