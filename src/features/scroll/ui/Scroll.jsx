import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollThreshold = 200; // Порог прокрутки в пикселях

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`scroll-to-top bg-clickable-default hover:bg-clickable-hover active:bg-clickable-active ${isVisible ? 'show' : ''}`} // Добавляем класс show
            onClick={scrollToTop}
            title="Наверх"
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;