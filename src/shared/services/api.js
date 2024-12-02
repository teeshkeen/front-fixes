// frontend/src/shared/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Добавляем интерцептор для обработки ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname.startsWith('/admin')) {
      localStorage.removeItem('token'); // Удаляем невалидный токен
      window.location.href = '/login'; // Перенаправляем на страницу логина только для админ-маршрутов
    }
    return Promise.reject(error);
  }
);

export const categoryAPI = {
  getCategories: () => api.get('/categories'),
  createCategory: (data) => api.post('/categories', data),
  updateCategory: (id, data) => api.put(`/categories/${id}`, data),
  deleteCategory: (id) => api.delete(`/categories/${id}`)
};

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (data) => api.post('/auth/register', data), // Добавляем метод регистрации
  logout: () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
};

export const productAPI = {
  getProductsByCategoryId: (categoryId) => 
    api.get(`/categories/${categoryId}/products`),
  
  createProduct: async (categoryId, productData) => {
    try {
      console.log('Sending request to create product:', { categoryId, productData });
      const response = await api.post(`/categories/${categoryId}/products`, productData);
      console.log('Product created successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error.response?.data || error.message);
      throw error;
    }
  },
  
  updateProduct: (id, data) => 
    api.put(`/products/${id}`, data),

  getAllProducts: async () => {
    const response = await axios.get('/api/products'); // Измените путь в зависимости от вашего маршрута
    return response.data;
  },

  updateProductPrices: async (productIds, isIncrease, isDecrease, percentage) => {
    const response = await axios.post('/api/products/update-prices', {
      productIds,
      isIncrease,
      isDecrease,
      percentage,
    });
    return response.data;
  },
  
  deleteProduct: async (id) => {
    try {
      const response = await api.delete(`/products/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  },
};

export default api;
