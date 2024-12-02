import React, { useState } from 'react';

const ChangePriceForm = ({ selectedProducts, onUpdatePrices }) => {
  const [isIncrease, setIsIncrease] = useState(false);
  const [isDecrease, setIsDecrease] = useState(false);
  const [percentage, setPercentage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePrices(selectedProducts, isIncrease, isDecrease, percentage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Изменение цен</h2>
      <label>
        <input
          type="checkbox"
          checked={isIncrease}
          onChange={() => {
            setIsIncrease(true);
            setIsDecrease(false);
          }}
        />
        Повысить цену
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDecrease}
          onChange={() => {
            setIsDecrease(true);
            setIsIncrease(false);
          }}
        />
        Понизить цену
      </label>
      <input
        type="number"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
        placeholder="Процент"
        required
      />
      <button type="submit">Изменить</button>
    </form>
  );
};

export default ChangePriceForm;