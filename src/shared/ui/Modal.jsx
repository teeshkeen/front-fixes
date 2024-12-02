import React from 'react'

const Modal = ({ message, onClose }) => {
    return (
        <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg">
                <h2 className="text-lg font-bold">{message}</h2>
                <button onClick={onClose} className="mt-4 p-2 bg-green-600 hover:bg-button-hover transition-all text-white rounded">
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal