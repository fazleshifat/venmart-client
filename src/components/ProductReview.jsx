import React from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/PrivateRoute';

const ProductReview = () => {
    const { user } = use(AuthContext);
    return (
        <div>
            <div className="mt-8">
                <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">Customer Reviews</h3>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                        <span className="text-yellow-400">⭐</span>
                        <span className="font-semibold text-zinc-600 dark:text-zinc-400">4.5/5</span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Based on 120 reviews</p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow-sm space-y-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        "This is an amazing product! I love it. It exceeded my expectations and works like a charm."
                    </p>
                    <div className="flex items-center">
                        <img src={user?.photoURL} alt="User" className="w-10 h-10 rounded-full" />
                        <span className="ml-2 font-semibold text-zinc-800 dark:text-white">John Doe</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;