// frontend/src/pages/home/ui/catalog/ui/CatalogNav.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryAPI } from '../../../../../shared/services/api';
import CatalogNavItem from '../../../../../features/catalog/ui/CatalogNavItem';
import ExampleCatalogNav from './exampleCatalogNav';

const CatalogNav = ({styles = ''}) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await categoryAPI.getCategories();
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error loading categories:', error);
      setError('Ошибка загрузки категорий');
    }
  };

  const handleCardClick = (id) => {
    navigate(`/nomenclature/${id}`);
  };

  // if (error) {
  //   return <div className="text-red-500">{error}</div>;
  // }

  return (
    <div className={`flex flex-col bg-white p-5 rounded-lg min-w-64 shadow-lg ${styles}`}>
      <ul className='space-y-[10px]'>
        {
        
        categories.length <= 0 ? <ExampleCatalogNav /> : 
        categories.map(category => (
          <li key={category.id} onClick={() => handleCardClick(category.id)}>
            <CatalogNavItem title={category.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogNav;