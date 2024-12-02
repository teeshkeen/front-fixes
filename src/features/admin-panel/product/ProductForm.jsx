import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    costFirst: '',
    costSecond: '',
    countType: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        desc: product.desc || '',
        costFirst: product.costFirst || '',
        costSecond: product.costSecond || '',
        countType: product.countType || '',
        imageUrl: product.imageUrl || ''
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    onSave(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">
        {product ? 'Изменить товар' : 'Добавить новый товар'}
      </h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Название</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Описание</label>
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Единица измерения</label>
        <input
          type="text"
          name="countType"
          value={formData.countType}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Цена (безнал)</label>
        <input
          type="text"
          name="costFirst"
          value={formData.costFirst}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Цена (нал)</label>
        <input
          type="text"
          name="costSecond"
          value={formData.costSecond}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">URL изображения</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          {product ? 'Сохранить изменения' : 'Добавить товар'}
        </button>
        <button
          onClick={onCancel}
          className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default ProductForm;