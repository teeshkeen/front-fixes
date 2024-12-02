import React, { useState, useEffect } from 'react';
import { productAPI } from '../../../shared/services/api';
import Modal from '../../../shared/ui/Modal';
import ProductForm from './ProductForm';

const ProductManager = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await productAPI.getProductsByCategoryId(category.id);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const handleAddClick = () => {
    setSelectedProduct(null); // Сбрасываем выбранный продукт
    setIsModalOpen(true); // Открываем модальное окно
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product); // Устанавливаем выбранный продукт
    setIsModalOpen(true); // Открываем модальное окно
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      try {
        await productAPI.deleteProduct(id);
        loadProducts(); // Перезагружаем список после удаления
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleSaveProduct = async (formData) => {
    try {
      if (selectedProduct) {
        await productAPI.updateProduct(selectedProduct.id, formData);
      } else {
        await productAPI.createProduct(category.id, formData);
      }
      loadProducts(); // Перезагружаем список после сохранения
      setIsModalOpen(false); // Закрываем модальное окно
      setSelectedProduct(null); // Сбрасываем выбранный продукт
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div className="space-y-8">
      <button
        onClick={handleAddClick}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Добавить новый товар
      </button>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.costFirst} / {product.costSecond}</p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => handleEditClick(product)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Изменить
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
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
          <ProductForm
            product={selectedProduct}
            onSave={handleSaveProduct}
            onCancel={() => {
              setIsModalOpen(false);
              setSelectedProduct(null);
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProductManager;