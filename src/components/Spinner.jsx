import React from 'react';
import loadingAnimation from '../../public/assets/animations/loading.json'
import Lottie from 'lottie-react';

const Spinner = () => {
    return (
        <div className="h-[85vh] w-full flex flex-col items-center justify-center gap-3">
            <Lottie animationData={loadingAnimation} className='w-16'></Lottie>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-wider uppercase animate-pulse">Loading...</p>
        </div>
    );
};

export default Spinner;
