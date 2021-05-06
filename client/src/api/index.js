import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

//before requests to send tokens to backend 
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

//users
export const fetchUsers = ()=>API.get('/users');
export const updateUser = (id,updatedUser) => API.patch(`/users/${id}`,updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const createUser = (newUser) =>API.post('/users',newUser);

//auth
export const signin =(formData)=> API.post('/users/signin',formData);
export const forgotPassword=(email)=>API.post('/users/forgotPassword',email); 
export const resetPassword=(formData,token)=>API.post('/users/resetPassword',formData,{headers:{Authorization:token}});


//services
export const fetchServices = ()=> API.get('/Services');
export const createService = (newService)=>API.post('/profile/services',newService);
export const updateService = (id,updatedService)=>API.patch(`/profile/services/${id}`,updatedService);
export const deleteService = (id) => API.delete(`/profile/services/${id}`);