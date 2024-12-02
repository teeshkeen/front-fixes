import React, { useState, useEffect } from 'react';
import { categoryAPI } from '../../../../shared/services/api';
import BlockTitle from '../../../../shared/ui/BlockTitle';
import CatalogCard from '../../../../features/catalog/ui/CatalogCard';
import CatalogNav from '../catalog/ui/CatalogNav'
import { useNavigate } from 'react-router-dom';
import Button from '../../../../shared/ui/Button';
import ExampleCatalog from './ui/exampleCatalog';
const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5); // Количество видимых карточек
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

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 5); // Увеличиваем количество видимых карточек
  };
  return (
    <div id='catalog' className='mb-14 768:mb-24'>
    <div className='mb-5'>
      <BlockTitle>Каталог</BlockTitle>
    </div>
    <div className="1280:flex 1280:flex-row 1280:items-start 1280:gap-14 mb-[30px]">
      <CatalogNav styles='hidden 1280:flex'/>
      <div className="1280:hidden">
      <div id='catalogCards' className='grid grid-cols-1 768:grid-cols-2 1280:grid-cols-3  gap-5 auto-rows-fr'>
                      {

                      categories.slice(0, visibleCount).map(category => (
          <div key={category.id} onClick={() => handleCardClick(category.id)}>
            <CatalogCard name={category.name} title={category.name} cost={category.cost} imageUrl={category.imageUrl} /> {/* Pass category name and image to CatalogCard */}
          </div>
        ))}

      </div>
      </div>
      <div id='catalogCards' className='hidden 1280:grid grid-cols-1 768:grid-cols-2 1280:grid-cols-3 1720:grid-cols-4 1920:grid-cols-3 gap-5 auto-rows-fr'>
              {
                categories.length <= 0 ? <ExampleCatalog /> : categories.map(category => (
                  <div key={category.id} onClick={() => handleCardClick(category.id)}>
                  <CatalogCard name={category.name} title={category.name} cost={category.cost} imageUrl={category.imageUrl} /> {/* Pass category name and image to CatalogCard */}
                </div>))
            
        }

    </div>

    </div>
    <div className="768:flex 768:justify-center 1280:hidden">
    {visibleCount < categories.length && (
            <Button text={'Показать еще'} onClick={handleShowMore}/>
          )}
    </div>
  </div>
    
  );
};

export default Catalog;
