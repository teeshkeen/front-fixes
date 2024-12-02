import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryAPI, productAPI } from '../../shared/services/api';
import CategoryModal from '../../features/admin-panel/category/CategoryModal';
import ProductModal from '../../features/admin-panel/product/ProductModal';
import LogoutButton from '../login/ui/LogoutButton';
import Modal from '../../shared/ui/PriceProductModal'; // Импортируем модальное окно

const AdminPage = () => {
    const [categories, setCategories] = useState([]);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [isChangePriceModalOpen, setIsChangePriceModalOpen] = useState(false);
    const [isChangePriceDetailsModalOpen, setIsChangePriceDetailsModalOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState({
        name: '',
        cost: '',
        typeCostFirst: '',
        typeCostSecond: '',
        imageUrl: ''
    });
    const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [priceChangeType, setPriceChangeType] = useState('increase');
    const [percentage, setPercentage] = useState(0);
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
        }
    };

    const handleCategoryInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentCategory({ ...currentCategory, [name]: value });
    };

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        try {
            const categoryData = {
                name: currentCategory.name.trim(),
                cost: currentCategory.cost.trim(),
                typeCostFirst: currentCategory.typeCostFirst.trim(),
                typeCostSecond: currentCategory.typeCostSecond.trim(),
                imageUrl: currentCategory.imageUrl?.trim()
            };

            if (currentCategory.id) {
                await categoryAPI.updateCategory(currentCategory.id, categoryData);
            } else {
                await categoryAPI.createCategory(categoryData);
            }

            loadCategories();
            setIsCategoryModalOpen(false);
            resetCategoryForm();
        } catch (error) {
            console.error('Error saving category:', error);
            alert('Error saving category: ' + (error.response?.data?.message || error.message));
        }
    };

    const resetCategoryForm = () => {
        setCurrentCategory({
            name: '',
            cost: '',
            typeCostFirst: '',
            typeCostSecond: '',
            imageUrl: ''
        });
    };

    const handleEditCategory = (category) => {
        setCurrentCategory(category);
        setIsCategoryModalOpen(true);
    };

    const handleDeleteCategory = async (id) => {
        if (window.confirm('Вы уверены, что хотите удалить эту категорию?')) {
            try {
                await categoryAPI.deleteCategory(id);
                loadCategories();
            } catch (error) {
                console.error('Error deleting category:', error.response?.data || error);
                alert('Ошибка при удалении категории: ' + (error.response?.data?.message || error.message));
            }
        }
    };

    const handleOpenProductModal = async (categoryId) => {
        try {
            const response = await productAPI.getProductsByCategoryId(categoryId);
            setCurrentCategoryProducts(response.data.products);
            setCurrentCategory({...currentCategory, id: categoryId});
            setIsProductModalOpen(true);
        } catch (error) {
            console.error('Error loading products:', error);
            alert('Error loading products: ' + (error.response?.data?.message || error.message));
        }
    };

    // Новый функционал для изменения цен
    const loadProducts = async () => {
        try {
            const response = await productAPI.getProductsByCategoryId(currentCategory.id); // Получаем продукты для текущей категории
            setCurrentCategoryProducts(response.data.products);
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };

    const handleChangePrice = () => {
        setIsChangePriceModalOpen(false);
        loadProducts(); // Загружаем продукты перед открытием модального окна
 setIsChangePriceDetailsModalOpen(true);
    };

    const applyPriceChange = async () => {
      try {
          const updatedProducts = currentCategoryProducts.map(product => {
              if (selectedProducts.includes(product.id)) {
                  const changeAmount = (product.costFirst * (percentage / 100));
                  return {
                      ...product,
                      costFirst: priceChangeType === 'increase' ? 
                          parseFloat(product.costFirst) + changeAmount : 
                          parseFloat(product.costFirst) - changeAmount,
                      costSecond: priceChangeType === 'increase' ? 
                          parseFloat(product.costSecond) + changeAmount : 
                          parseFloat(product.costSecond) - changeAmount,
                  };
              }
              return product;
          });
  
          await productAPI.updateProducts(updatedProducts);
          setIsChangePriceDetailsModalOpen(false);
          setSelectedProducts([]);
          loadProducts();
      } catch (error) {
          console.error('Error applying price change:', error);
      }
  };

    return (
        <div>
            <h1>Админ-панель</h1>
            <LogoutButton />
            <button onClick={() => setIsCategoryModalOpen(true)}>Создать новую категорию</button>
            <button onClick={() => setIsChangePriceModalOpen(true)}>Изменить цену</button>

            {isCategoryModalOpen && (
                <CategoryModal 
                    onClose={() => setIsCategoryModalOpen(false)} 
                    onSubmit={handleCategorySubmit} 
                    category={currentCategory} 
                    onInputChange={handleCategoryInputChange} 
                />
            )}

            {isProductModalOpen && (
                <ProductModal 
                    onClose={() => setIsProductModalOpen(false)} 
                    products={currentCategoryProducts} 
                    categoryId={currentCategory.id} 
                />
            )}

            {isChangePriceModalOpen && (
                <Modal onClose={() => setIsChangePriceModalOpen(false)}>
                    <h2>Изменение цен товаров</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Выбрать</th>
                                <th>Название</th>
                                <th>Описание</th>
                                <th>Цена</th>
                                <th>Категория</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCategoryProducts.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            checked={selectedProducts.includes(product.id)}
                                            onChange={() => {
                                                setSelectedProducts(prev => 
                                                    prev.includes(product.id) ? 
                                                    prev.filter(id => id !== product.id) : 
                                                    [...prev, product.id]
                                                );
                                            }} 
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.desc}</td>
                                    <td>{product.costFirst} / {product.costSecond}</td>
                                    <td style={{ opacity: 0.5 }}>{product.categoryName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleChangePrice}>Изменить</button>
                </Modal>
            )}

            {isChangePriceDetailsModalOpen && (
                <Modal onClose={() => setIsChangePriceDetailsModalOpen(false)}>
                    <h2>Изменение цены</h2>
                    <label>
                        <input 
                            type="radio" 
                            value="increase" 
                            checked={priceChangeType === 'increase'} 
                            onChange={() => setPriceChangeType('increase')} 
                        /> Увеличить
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="decrease" 
                            checked={priceChangeType === 'decrease'} 
                            onChange={() => setPriceChangeType('decrease')} 
                        /> Уменьшить
                    </label>
                    <input 
                        type="number" 
                        value={percentage} 
                        onChange={(event) => setPercentage(event.target.value)} 
                        placeholder="Введите процент" 
                        min="0" 
                    />
                    <button onClick={applyPriceChange}>Применить</button>
                </Modal>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Категория</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                                <button onClick={() => handleEditCategory(category)}>Редактировать</button>
                                <button onClick={() => handleDeleteCategory(category.id)}>Удалить</button>
                                <button onClick={() => handleOpenProductModal(category.id)}>Просмотреть товары</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;