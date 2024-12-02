import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productAPI } from '../../../shared/services/api';
import Modal from '../shared/Modal';

const CategoryProductList = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    cost: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (categoryId) {
      loadProducts();
    }
  }, [categoryId]);

  const loadProducts = async () => {
    try {
      const response = await productAPI.getProductsByCategoryId(categoryId);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error loading products:', error);
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
      desc: '',
      cost: '',
      image: null
    });
    setPreviewImage(null);
    setSelectedProduct(null);
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
      if (selectedProduct) {
        await productAPI.updateProduct(selectedProduct.id, data);
      } else {
        // Добавьте консоль лог для отладки
        console.log('Sending data to create product:', data);
        const response = await productAPI.createProduct(categoryId, data);
        console.log('Create product response:', response);
      }
      // Обновляем список после успешного создания/обновления
      await loadProducts();
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      desc: product.desc,
      cost: product.cost,
      image: null
    });
    if (product.image) {
      setPreviewImage(product.image);
    }
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      try {
        await productAPI.deleteProduct(id);
        loadProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div className="space-y-8">
      <button
        onClick={() => {
          resetForm();
          setIsModalOpen(true);
        }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Добавить новый товар
      </button>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.cost}</p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => handleEdit(product)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Настройки
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">
              {selectedProduct ? 'Редактировать товар' : 'Добавить новый товар'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Название товара"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
                placeholder="Описание товара"
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
                type="file"
                name="image"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              {previewImage && (
                <img src={previewImage } alt="Preview" className="w-full h-48 object-cover rounded" />
              )}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                {selectedProduct ? 'Обновить' : 'Добавить'}
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CategoryProductList;