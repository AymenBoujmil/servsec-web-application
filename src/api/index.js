import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

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

export const fetchServices = ()=> API.get('/Services');