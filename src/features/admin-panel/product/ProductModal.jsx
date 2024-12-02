import React, { useState, useEffect } from 'react';

const ProductModal = ({ isOpen, onClose, categoryId, products, onAddProduct, onUpdateProduct, onDeleteProduct, onEditProduct, selectedProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    costFirst: '',
    costSecond: '',
    countType: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
      setShowForm(true);
    } else {
      resetForm();
    }
  }, [selectedProduct]);

  const resetForm = () => {
    setFormData({
      name: '',
      desc: '',
      costFirst: '',
      costSecond: '',
      countType: '',
      imageUrl: ''
    });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      onUpdateProduct(formData);
    } else {
      onAddProduct(formData);
    }
    resetForm();
  };

  const handleAddNewClick = () => {
    setShowForm(true);
    setFormData({
      name: '',
      desc: '',
      costFirst: '',
      costSecond: '',
      countType: '',
      imageUrl: ''
    });
  };

  if (!isOpen) return null;

  return (
<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 sm:p-6 rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Управление товарами</h2>
        
        {!showForm && (
          <button
            onClick={handleAddNewClick}
            className="mb-4 bg-green-500 text-white px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded hover:bg-green-600"
          >
            Добавить новый товар
          </button>
        )}

{showForm && (
  <form id="product-form" onSubmit={handleSubmit} className="space-y-4">
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
    />
    <input
      type="text"
      name="costFirst"
      value={formData.costFirst}
      onChange={handleInputChange}
      placeholder="Цена (безнал)"
      className="w-full p-2 border rounded"
      required
    />
    <input
      type="text"
      name="costSecond"
      value={formData.costSecond}
      onChange={handleInputChange}
      placeholder="Цена (нал)"
      className="w-full p-2 border rounded"
      required
    />
    <input
      type="text"
      name="countType"
      value={formData.countType}
      onChange={handleInputChange}
      placeholder="Единица измерения"
      className="w-full p-2 border rounded"
      required
    />
    <input
      type="text"
      name="imageUrl"
      value={formData.imageUrl}
      onChange={handleInputChange}
      placeholder="URL изображения"
      className="w-full p-2 border rounded"
    />
    <div className="flex justify-end space-x-2">
      <button
        type="button"
        onClick={resetForm}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Отмена
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {selectedProduct ? 'Обновить товар' : 'Добавить товар'}
      </button>
    </div>
  </form>
)}

{!showForm && (
          <div className="overflow-y-auto flex-grow" style={{maxHeight: 'calc(90vh - 200px)'}}>
            <ul className="space-y-2">
              {products.map(product => (
                <li key={product.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 hover:bg-gray-100">
                  <span className="mb-2 sm:mb-0">{product.name}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onEditProduct(product)}
                      className="bg-yellow-500 text-white px-2 py-1 text-xs sm:text-sm rounded hover:bg-yellow-600"
                    >
                      Изменить
                    </button>
                    <button
                      onClick={() => onDeleteProduct(product.id)}
                      className="bg-red-500 text-white px-2 py-1 text-xs sm:text-sm rounded hover:bg-red-600"
                    >
                      Удалить
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded hover:bg-gray-600"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default ProductModal;


