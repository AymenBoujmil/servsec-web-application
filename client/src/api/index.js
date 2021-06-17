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
export const searchServices = (service)=> API.get(`/Services/${service}`);
export const createService = (newService)=>API.post('/profile/services',newService);
export const updateService = (id,updatedService)=>API.patch(`/profile/services/${id}`,updatedService);
export const deleteService = (id) => API.delete(`/profile/services/${id}`);

//requests data
export const fetchRqData = ()=> API.get('/service/RequestForm');
export const createRqData = (newRqData)=>API.post('/service/RequestForm',newRqData);
export const updateRqData = (id,updatedRqData)=>API.patch(`/service/RequestForm/${id}`,updatedRqData);
export const deleteRqData = (id) => API.delete(`/service/RequestForm/${id}`);

//Categories
export const fetchCategories = ()=> API.get('/CategorieList');

//requests
export const fetchRequests = ()=> API.get('/profile/request');
export const createRequest = (newRequest)=>API.post('/profile/request',newRequest);
export const updateRequest = (id,updatedRequest)=>API.patch(`/profile/request/${id}`,updatedRequest);
export const deleteRequest = (id) => API.delete(`/profile/request/${id}`);

//messages
export const fetchMessages = ()=> API.get('/messages');
export const fetchMessagesBySender = (id)=> API.get(`/message/from/${id}`,{id:id});
export const fetchMessagesByReceiver = (id)=> API.get(`/message/to/${id}`,{id:id});
export const countMessagesById = (id)=> API.get(`/message/${id}/count`,{id:id});
export const createMessage = (newMessage)=>API.post('/message/',newMessage);
export const updateMessage = (id)=>API.patch(`/message/${id}`);
export const deleteMessage = (id) => API.delete(`/message/${id}`);

//contacts
export const createContact = (newContact)=>API.post('/contact',newContact);

//reviews
export const createReview = (newReview)=> API.post('/review',newReview);
export const fetchReviews = ()=> API.get('/review');

//messages
export const fetchServiceReviews = (id)=> API.get(`/serviceReview?id=${id}`);
export const createServiceReview = (newServiceReview)=>API.post('/serviceReview',newServiceReview);
export const deleteServiceReview = (id) => API.delete(`/serviceReview`,id);