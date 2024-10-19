import React from 'react';
import Main from './components/Main'; // Импорт главного компонента Main из папки components

// Функциональный компонент App
const App: React.FC = () => {
    return (
      // Отображение основного контейнера для приложения
        <div>
            <Main /> {/* Отображение компонента Main, который управляет отображением всей страницы */}
        </div>
    );
};

export default App; // Экспорт компонента App для использования в других частях приложения
