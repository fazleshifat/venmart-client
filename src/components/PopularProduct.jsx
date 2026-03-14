import React from 'react';
import { Link } from 'react-router';

const PopularProduct = () => {
    const popularProducts = [
        {
            "_id": "101",
            "name": "Smartphone X1",
            "image": "/assets/phone.jpeg",
            "brand": "Brand A",
            "price": 599.99,
            "rating": 4.8,
        },
        {
            "_id": "102",
            "name": "Smartwatch Z",
            "image": "/assets/watch.jpeg",
            "brand": "Brand B",
            "price": 199.99,
            "rating": 4.5,
        },
        {
            "_id": "103",
            "name": "Laptop Pro 14",
            "image": "/assets/laptop.jpeg",
            "brand": "Brand C",
            "price": 999.99,
            "rating": 4.7,
        },
        {
            "_id": "104",
            "name": "Bluetooth Headphones",
            "image": "/assets/headphones.jpeg",
            "brand": "Brand D",
            "price": 79.99,
            "rating": 4.3,
        },
        {
            "_id": "105",
            "name": "Gaming Mouse",
            "image": "/assets/mouse.jpeg",
            "brand": "Brand E",
            "price": 49.99,
            "rating": 4.6,
        }
    ]
    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                Popular Products
            </h2>

            <div className="space-y-3">
                {popularProducts.map((product, index) => (
                    <Link
                        key={index}
                        to='/allProducts'
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors duration-200 group"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-800 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-xs text-gray-400 dark:text-gray-500">{product.brand}</p>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">${product.price}</span>
                                <span className="text-xs text-gray-400 flex items-center gap-0.5">
                                    <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    {product.rating}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;
