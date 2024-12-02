// src/components/CategoryModal.jsx
import React from 'react';

const CategoryModal = ({ isOpen, onClose, category, onChange, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {category.id ? 'Изменить категорию' : 'Создать новую категорию'}
          </h3>
          <form onSubmit={onSubmit} className="mt-2 px-7 py-3">
            <input
              type="text"
              name="name"
              value={category.name}
              onChange={onChange}
              placeholder="Name"
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              required
            />
            <input
              type="text"
              name="cost"
              value={category.cost}
              onChange={onChange}
              placeholder="Cost"
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              required
            />
            <input
              type="text"
              name="typeCostFirst"
              value={category.typeCostFirst}
              onChange={onChange}
              placeholder="Type Cost First"
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              required
            />
            <input
              type="text"
              name="typeCostSecond"
              value={category.typeCostSecond}
              onChange={onChange}
              placeholder="Type Cost Second"
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              required
            />
            <input
              type="text"
              name="imageUrl"
              value={category.imageUrl}
              onChange={onChange}
              placeholder="Image URL"
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              required
            />
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                {category.id ? 'Обновить' : 'Создать'}
              </button>
              <button
            onClick={onClose}
            className="mt-2 px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Закрыть
          </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;