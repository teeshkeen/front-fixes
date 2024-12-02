import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryAPI, productAPI } from '../../shared/services/api';
import CategoryModal from '../../features/admin-panel/category/CategoryModal';
import ProductModal from '../../features/admin-panel/product/ProductModal';
import LogoutButton from '../login/ui/LogoutButton';
import PriceChangeModal from '../../shared/ui/PriceChangeModal';

const AdminPage = () => { 
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    name: '',
    cost: '',
    typeCostFirst: '',
    typeCostSecond: '',
    imageUrl: ''
  });
  const [isPriceChangeModalOpen, setPriceChangeModalOpen] = useState(false);
  const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  useEffect(() => {
    loadProducts(); // Загружаем товары при монтировании компонента
  }, []);

  const loadProducts = async () => {
    try {
      const response = await productAPI.getAllProducts(); // Создайте этот метод в вашем API
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const handleCategoryInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      // Проверяем данные перед отправкой
      const categoryData = {
        name: currentCategory.name.trim(),
        cost: currentCategory.cost.trim(),
        typeCostFirst: currentCategory.typeCostFirst.trim(),
        typeCostSecond: currentCategory.typeCostSecond.trim(),
        imageUrl: currentCategory.imageUrl?.trim()
      };
  
      // Проверяем обязательные поля
      if (!categoryData.name || !categoryData.cost || !categoryData.typeCostFirst || !categoryData.typeCostSecond) {
        alert('Пожалуйста, заполните все обязательные поля');
        return;
      }
  
      console.log('Sending category data:', categoryData);
  
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
      console.error('Error response:', error.response?.data);
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
      loadCategories(); // Перезагрузка списка категорий
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
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error loading products:', error);
      console.error('Error response:', error.response?.data);
      alert('Error loading products: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleAddProduct = async (product) => {
    try {
      await productAPI.createProduct(currentCategory.id, product);
      // Сразу после создания загружаем обновленный список продуктов
      const response = await productAPI.getProductsByCategoryId(currentCategory.id);
      setCurrentCategoryProducts(response.data.products);
      setIsProductModalOpen(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleUpdateProduct = async (product) => {
    try {
      await productAPI.updateProduct(product.id, product);
      const response = await productAPI.getProductsByCategoryId(currentCategory.id);
      setCurrentCategoryProducts(response.data.products);
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
        await productAPI.deleteProduct(id);
        // После успешного удаления обновляем список продуктов
        const response = await productAPI.getProductsByCategoryId(currentCategory.id);
        setCurrentCategoryProducts(response.data.products);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Ошибка при удалении товара');
    }
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleUpdatePrices = async (selectedProducts, isIncrease, isDecrease, percentage) => {
    try {
      // Преобразуем процент в число
      const percentValue = parseFloat(percentage);
  
      // Проверяем, что введен корректный процент
      if (isNaN(percentValue) || percentValue <= 0) {
        alert('Пожалуйста, введите корректный процент.');
        return;
      }
  
      // Вызываем API для обновления цен
      await productAPI.updateProductPrices(selectedProducts, isIncrease, isDecrease, percentValue);
  
      // Обновите список товаров, если это необходимо
      // Например, можно вызвать функцию для загрузки всех товаров
      loadProducts(); // Эта функция должна быть реализована для получения обновленного списка товаров
  
      // Закрываем модальное окно
      setPriceChangeModalOpen(false);
    } catch (error) {
      console.error('Error updating prices:', error);
      alert('Ошибка при обновлении цен. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handleOpenPriceChangeModal = () => {
    setPriceChangeModalOpen(true);
  };

  const handleClosePriceChangeModal = () => {
    setPriceChangeModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Admin Panel</h1>
      <LogoutButton />
      
      <button 
        onClick={() => setIsCategoryModalOpen(true)} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base rounded mb-4"
      >
        Create Category
      </button>

      <button
        onClick={handleOpenPriceChangeModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Изменить цены товаров
      </button>

      <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li 
              key={category.id} 
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 bg-white rounded shadow hover:bg-gray-50"
            >
              <span className="mb-2 sm:mb-0 font-medium">{category.name}</span>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => handleEditCategory(category)} 
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 text-xs sm:text-sm rounded"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteCategory(category.id)} 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 text-xs sm:text-sm rounded"
                >
                  Delete
                </button>
                <button 
                  onClick={() => handleOpenProductModal(category.id)} 
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 text-xs sm:text-sm rounded"
                >
                  Products
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        category={currentCategory}
        onChange={handleCategoryInputChange}
        onSubmit={handleCategorySubmit}
      />
      
      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        categoryId={currentCategory.id}
        products={currentCategoryProducts}
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
        selectedProduct={selectedProduct}
      />
  
        <PriceChangeModal
         isOpen={isPriceChangeModalOpen}
        onClose={handleClosePriceChangeModal}
        onUpdatePrices={handleUpdatePrices} // Передаем функцию для обновления цен
        />
    </div>
  );
};

export default AdminPage;