import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

const url='http://localhost:5000/users';
const url2='http://localhost:5000/ServiceList';

export const fetchUsers = ()=>axios.get(url);
export const createUser = (newUser) =>axios.post(url,newUser);
export const updateUser = (id,updatedUser) => axios.patch(`${url}/${id}`,updatedUser);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);

export const fetchServices = ()=>axios.get(url2);
//before requests to send tokens to backend 
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchUsers = ()=>API.get('/users');
export const updateUser = (id,updatedUser) => API.patch(`/users/${id}`,updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`);

export const createUser = (newUser) =>API.post('/users',newUser);
export const signin =(formData)=> API.post('/users/signin',formData);
