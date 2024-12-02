import React from 'react';
import { authAPI } from '../../../shared/services/api';

const LogoutButton = () => {
  const handleLogout = () => {
    authAPI.logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Выйти
    </button>
  );
};

export default LogoutButton;