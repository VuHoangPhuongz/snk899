import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

// Product APIs
export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const createProduct = (productData) => axios.post(`${API_URL}/products`, productData);
export const updateProduct = (id, productData) => axios.put(`${API_URL}/products/${id}`, productData);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);

// Project APIs
export const getProjects = () => axios.get(`${API_URL}/projects`);
export const getProjectById = (id) => axios.get(`${API_URL}/projects/${id}`);
export const createProject = (data) => axios.post(`${API_URL}/projects`, data);
export const updateProject = (id, data) => axios.put(`${API_URL}/projects/${id}`, data);
export const deleteProject = (id) => axios.delete(`${API_URL}/projects/${id}`);

// News APIs
export const getNews = () => axios.get(`${API_URL}/news`);
export const getNewsById = (id) => axios.get(`${API_URL}/news/${id}`);
export const createNews = (data) => axios.post(`${API_URL}/news`, data);
export const updateNews = (id, data) => axios.put(`${API_URL}/news/${id}`, data);
export const deleteNews = (id) => axios.delete(`${API_URL}/news/${id}`);