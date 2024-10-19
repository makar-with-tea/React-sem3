import React from 'react';
import './ProductList.css'; // Импорт файла стилей для компонента ProductList

// Класс для представления продукта
class Product {
    id: number; // Идентификатор продукта
    name: string; // Название продукта
    price: number; // Стоимость продукта

    // Конструктор для инициализации продукта
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Пример массива продуктов с их инициализацией
const products = [
    new Product(1, 'Иуп', 0), 
    new Product(2, 'Комплекс', 230), 
    new Product(3, 'Желание жить', 9999)
];

// Функциональный компонент ProductList
const ProductList: React.FC = () => {
    return (
        // Отображение списка продуктов
        // Использование стилей класса product-list из файла ProductList.css
        <div className='product-list'>
            <h2>Список товаров</h2> {/* Заголовок списка продуктов */}
            <table> {/* Таблица для отображения продуктов */}
                <thead>
                    <tr> {/* Строка заголовков таблицы */}
                        <th>Название</th> {/* Заголовок для названия продукта */}
                        <th>Стоимость (₽)</th> {/* Заголовок для стоимости продукта */}
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => ( // Отображение каждой записи из массива продуктов
                        <tr key={product.id}> {/* Проверка уникального ключа строки */}
                            <td>{product.name}</td> {/* Отображение названия продукта */}
                            <td>{product.price}</td> {/* Отображение цены продукта */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList; // Экспорт компонента ProductList для использования в других частях приложения
