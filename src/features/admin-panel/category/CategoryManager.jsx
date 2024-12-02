import React, { useState, useEffect } from 'react';
import { categoryAPI } from '../../../../shared/services/api';
import Modal from '../shared/Modal';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cost: '',
    typeCostFirst: '',
    typeCostSecond: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Можно добавить редирект на страницу входа
      window.location.href = '/login';
      return;
    }
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await categoryAPI.getCategories();
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      cost: '',
      typeCostFirst: '',
      typeCostSecond: '',
      image: null
    });
    setPreviewImage(null);
    setSelectedCategory(null);
  };

  const handleAddCategory = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setFormData({
      name: category.name,
      cost: category.cost,
      typeCostFirst: category.typeCostFirst,
      typeCostSecond: category.typeCostSecond,
      image: null
    });
    if (category.image) {
      setPreviewImage(category.image);
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      if (selectedCategory) {
        await categoryAPI.updateCategory(selectedCategory.id, data);
      } else {
        await categoryAPI.createCategory(data);
      }
      loadCategories();
      handleCloseModal();
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить эту категорию?')) {
      try {
        await categoryAPI.deleteCategory(id);
        loadCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <div className="space-y-8">
      <button
        onClick={handleAddCategory}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Добавить новую категорию
      </button>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <div>
              <h2 className="text-lg font-bold">{category.name}</h2>
              <p className="text-sm text-gray-500">{category.cost}</p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => handleEditCategory(category)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Настройки
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">
              {selectedCategory ? 'Редактировать категорию' : 'Добавить новую категорию'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Название категории"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="cost"
                value={formData.cost}
                onChange={handleInputChange}
                placeholder="Стоимость"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="typeCostFirst"
                value={formData.typeCostFirst}
                onChange={handleInputChange}
                placeholder="Тип стоимости 1"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="typeCostSecond"
                value={formData.typeCostSecond}
                onChange={handleInputChange}
                placeholder="Тип стоимости 2"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="file"
                name="image"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              {previewImage && (
                <img src={previewImage} alt="Preview" className="w-full h-48 object-cover rounded" />
              )}
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  {selectedCategory ? 'Обновить' : 'Добавить'}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CategoryManager;