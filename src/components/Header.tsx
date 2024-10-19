import React from 'react';
import './Header.css'; // Импорт файла стилей для компонента заголовка

// Функциональный компонент Header
const Header: React.FC = () => {
    return (
        // Отображение заголовка магазина
        // Использование стилей класса header из файла Header.css
        <header className="header">
            <h1>HSE Shop</h1> {/* Заголовок 1 уровня с названием магазина */}
        </header>
    );
};

export default Header; // Экспорт компонента Header для использования в других частях приложения
