import { combineReducers } from 'redux';
import users from './users';
import services from './services';
import auth  from './auth';
import message from './message';
import rqdatas from './rqdatas';
import categories from './categories';
import requests from './requests'

export default combineReducers({ users,auth,services,message,rqdatas,categories,requests});

