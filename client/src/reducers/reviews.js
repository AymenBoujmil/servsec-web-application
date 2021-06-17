import {CREATE_REVIEW, FETCH_ALL_REVIEWS} from '../_constants/actionTypes';

export default (reviews=[],action)=>{
  switch (action.type) {
      case CREATE_REVIEW:
        return [...reviews,action.payload];
      case FETCH_ALL_REVIEWS:
        return action.payload;
      default:
        return reviews;
  }
}