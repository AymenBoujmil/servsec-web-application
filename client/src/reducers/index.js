import { combineReducers } from 'redux';
import users from './users';
import services from './services';
import auth  from './auth';
import message from './message';
import rqdatas from './rqdatas';
import requests from './requests'
import contacts from './contacts'

export default combineReducers({ users,auth,services,message,rqdatas,requests,contacts});

