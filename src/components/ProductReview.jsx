import React from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';

const reviews = [
    { name: "John Doe", image: "/assets/client1.jpeg", text: "This is an amazing product! Exceeded my expectations and works like a charm. Would definitely recommend." },
    { name: "Sarah Miller", image: "/assets/client2.jpeg", text: "Great quality for the price. The delivery was super fast and packaging was excellent." },
    { name: "Alex Johnson", image: "/assets/client3.jpeg", text: "Been using this for a month now. Solid build quality and great performance overall." },
    { name: "Emily Chen", image: "/assets/client4.jpeg", text: "Perfect for my business needs. The support team was also very helpful with setup." },
];

const ProductReview = () => {
    const { user } = use(AuthContext);
    return (
        <div>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Customer Reviews</h3>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4].map(i => (
                                <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            ))}
                            <svg className="w-4 h-4 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">4.5/5</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">(120 reviews)</span>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-700/50 space-y-3">
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-2.5">
                                <img src={review.image} alt={review.name} className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                    <span className="text-sm font-medium text-gray-800 dark:text-white">{review.name}</span>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <svg key={s} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductReview;
