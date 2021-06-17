import {CREATE_SERVICEREVIEW, FETCH_ALL_SERVICEREVIEWS} from '../_constants/actionTypes';

export default (serviceReviews=[],action)=>{
  switch (action.type) {
      case CREATE_SERVICEREVIEW:
        return [...serviceReviews,action.payload];
      case FETCH_ALL_SERVICEREVIEWS:
        return action.payload;
      default:
        return serviceReviews;
  }
}