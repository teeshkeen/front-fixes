import React, { useEffect, useState } from 'react';
import { productAPI } from '../services/api';
import Modal from './Modal';
import ChangePriceForm from './ChangePriceForm';

const PriceChangeModal = ({ isOpen, onClose, onUpdatePrices }) => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showPriceChangeForm, setShowPriceChangeForm] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productAPI.getAllProducts(); // Создайте этот метод в вашем API
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleOpenPriceChangeForm = () => {
    setShowPriceChangeForm(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Изменить цены товаров</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <input
              type="checkbox"
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleSelectProduct(product.id)}
            />
            {product.name}
          </li>
        ))}
      </ul>
      {selectedProducts.length > 0 && (
        <button onClick={handleOpenPriceChangeForm}>
          Изменить цены
        </button>
      )}
      {showPriceChangeForm && (
        <ChangePriceForm
          selectedProducts={selectedProducts}
          onUpdatePrices={onUpdatePrices}
        />
      )}
    </Modal>
  );
};

export default PriceChangeModal;