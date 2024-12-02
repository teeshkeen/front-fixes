import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categoryAPI, productAPI } from '../../../shared/services/api';
import NomenclatureCard from '../../../features/nomenclature/ui/NomenclatureCard';
import NomenclatureTitle from './NomenclatureTitle';
import Button from '../../../shared/ui/Button';

const NomenclatureList = () => {
  const [category, setCategory] = useState({
    name: '',
    cost: '',
    typeCostFirst: '',
    typeCostSecond: '',
    products: []
  });
  const { id } = useParams();
  const [visibleCount, setVisibleCount] = useState(5); // Количество видимых карточек

  useEffect(() => {
    loadCategoryAndProducts();
  }, [id]);

  const loadCategoryAndProducts = async () => {
    try {
      const categoryResponse = await categoryAPI.getCategories();
      const currentCategory = categoryResponse.data.categories.find(cat => cat.id === parseInt(id));
      
      if (!currentCategory) {
        console.error('Category not found');
        return;
      }

      const productsResponse = await productAPI.getProductsByCategoryId(id);
      
      setCategory({
        ...currentCategory,
        products: productsResponse.data.products || []
      });
      
    } catch (error) {
      console.error('Error loading category and products:', error);
    }
  };

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 5); // Увеличиваем количество видимых карточек
  };

  return (
    <>
    {category.name !== '' ? <NomenclatureTitle title={category.name} cost={category.cost} /> : <NomenclatureTitle title={'Название категории'} cost={'5 000'}/>}
      <div>
        <div className='space-y-4 mb-16 1440:hidden'>
          {category.products.length === 0 ? <NomenclatureCard 
          key={0} 
          title={"Пример"} 
          desc={"Описание примера"} 
          countType={"КГ."} 
          typeCostFirst={'Наличные'}
          typeCostSecond={'Безналичные'}
          image={'https://cdn2.picryl.com/photo/2021/03/17/soviet-armenian-k50-6-electrolytic-capacitors-0d6cca-1024.jpg'} 
          costFirst={'9 000'} 
          costSecond={'10 000'}
          /> : category.products.slice(0, visibleCount).map(product => (
            <NomenclatureCard 
              key={product.id} 
              title={product.name} 
              desc={product.desc} 
              countType={product.countType} 
              typeCostFirst={category.typeCostFirst}
              typeCostSecond={category.typeCostSecond}
              image={product.imageUrl} 
              costFirst={product.costFirst} 
              costSecond={product.costSecond}
            />
          ))}
          {visibleCount < category.products.length && (
            <Button text={'Показать еще'} onClick={handleShowMore}/>
          )}
        </div>

        <div className="hidden w-min flex-col justify-start items-start gap-10 1440:inline-flex mb-16">
          <div className="self-stretch justify-start items-center gap-[60px] inline-flex">
            <div className="w-[260px] text-[#212121] text-xl font-gilroyMedium">Фото детали</div>
            <div className="justify-start items-center gap-5 flex">
              <div className="w-[380px] text-[#212121] text-xl font-gilroyMedium">Наименование</div>
              <div className="w-[220px] text-[#212121] text-xl font-gilroyMedium">Ед.Изм.</div>
              <div className="w-[220px] text-[#212121] text-xl font-gilroyMedium">{category.typeCostFirst !== '' ? category.typeCostFirst : 'Первый тип цены'}</div>
              <div className="w-[220px] text-[#212121] text-xl font-gilroyMedium">{category.typeCostSecond !== '' ? category.typeCostSecond : 'Второй тип цены'}</div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 flex">
          {category.products.length === 0 ? <NomenclatureCard 
          key={0} 
          title={"Пример"} 
          desc={"Описание примера"} 
          countType={"кг."} 
          typeCostFirst={'Наличные'}
          typeCostSecond={'Безналичные'}
          image={'https://cdn2.picryl.com/photo/2021/03/17/soviet-armenian-k50-6-electrolytic-capacitors-0d6cca-1024.jpg'} 
          costFirst={'9 000'} 
          costSecond={'10 000'}
          /> : category.products.map(product => (
            <NomenclatureCard 
              key={product.id} 
              title={product.name} 
              desc={product.desc} 
              countType={product.countType} 
              typeCostFirst={category.typeCostFirst}
              typeCostSecond={category.typeCostSecond}
              image={product.imageUrl} 
              costFirst={product.costFirst} 
              costSecond={product.costSecond}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NomenclatureList;