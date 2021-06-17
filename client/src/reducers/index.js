import { combineReducers } from 'redux';
import users from './users';
import services from './services';
import auth  from './auth';
import message from './message';
import rqdatas from './rqdatas';
import categories from './categories';
import requests from './requests';
import contacts from './contacts';
import reviews from './reviews';
import servicereviews from './servicereviews';
export default combineReducers({ servicereviews, users,auth,services,message,rqdatas,categories,requests,contacts,reviews});

