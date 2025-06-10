import React from 'react';
import { Link } from 'react-router';

const PopularProduct = () => {
    const popularProducts = [
        {
            "_id": "101",
            "name": "Smartphone X1",
            "image": "/assets/phone.jpeg",
            "brand": "Brand A",
            "category": "Electronics",
            "price": 599.99,
            "rating": 4.8,
            "mainQty": 150,
            "minQty": 1,
            "description": "A top-rated smartphone with a sleek design, long battery life, and excellent camera quality."
        },
        {
            "_id": "102",
            "name": "Smartwatch Z",
            "image": "/assets/watch.jpeg",
            "brand": "Brand B",
            "category": "Electronics",
            "price": 199.99,
            "rating": 4.5,
            "mainQty": 200,
            "minQty": 1,
            "description": "A stylish smartwatch with fitness tracking, notifications, and heart rate monitor."
        },
        {
            "_id": "103",
            "name": "Laptop Pro 14",
            "image": "/assets/laptop.jpeg",
            "brand": "Brand C",
            "category": "Computers",
            "price": 999.99,
            "rating": 4.7,
            "mainQty": 50,
            "minQty": 1,
            "description": "A high-performance laptop for professionals with a 14-inch Retina display."
        },
        {
            "_id": "104",
            "name": "Bluetooth Headphones",
            "image": "/assets/headphones.jpeg",
            "brand": "Brand D",
            "category": "Accessories",
            "price": 79.99,
            "rating": 4.3,
            "mainQty": 100,
            "minQty": 1,
            "description": "Wireless Bluetooth headphones with noise cancellation and 20-hour battery life."
        },
        {
            "_id": "105",
            "name": "Gaming Mouse",
            "image": "/assets/mouse.jpeg",
            "brand": "Brand E",
            "category": "Accessories",
            "price": 49.99,
            "rating": 4.6,
            "mainQty": 300,
            "minQty": 1,
            "description": "Precision gaming mouse with customizable RGB lighting and 16000 DPI sensor."
        }
    ]
    return (
        <div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
                Our Popular Products
            </h2>

            {/* Similar Products List */}
            <div className="space-y-4">
                {popularProducts.map((popularProduct, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <img
                            src={popularProduct.image}
                            alt={popularProduct.name}
                            className="w-20 h-20 object-cover rounded-lg shadow-md"
                        />
                        <div className="space-y-2">
                            <h3 className="font-semibold text-zinc-800 dark:text-white">
                                {popularProduct.name}
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                💲{popularProduct.price}
                            </p>
                            <Link
                                to='/allProducts'
                                className="btn btn-outline btn-primary w-fit"

                            >
                                View Product
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;