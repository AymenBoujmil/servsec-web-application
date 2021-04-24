import axios from 'axios';

const url='http://localhost:5000/users';
const url2='http://localhost:5000/ServiceList';

export const fetchUsers = ()=>axios.get(url);
export const createUser = (newUser) =>axios.post(url,newUser);
export const updateUser = (id,updatedUser) => axios.patch(`${url}/${id}`,updatedUser);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);

export const fetchServices = ()=>axios.get(url2);