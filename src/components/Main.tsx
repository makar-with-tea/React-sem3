import React from 'react';
import Footer from './Footer'; // Импортирт компонента Footer
import Header from './Header'; // Импорт компонента Header
import ProductList from './ProductList'; // Импорт компонента ProductList
import './Main.css'; // Импорт файла стилей для компонента Main

// Функциональный компонент Main
const Main: React.FC = () => {
    return (
        // Отображение основного контейнера
        // Использование стилей класса main из файла Main.css
        <div className='main'>
            <Header /> {/* Расположение компонента Header */}
            <ProductList /> {/* Расположение компонента ProductList */}
            <Footer /> {/* Расположение компонента Footer */}
        </div>
    );
};

export default Main; // Экспорт компонента Main для использования в других частях приложения
