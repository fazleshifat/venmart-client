import React from 'react';
import loadingAnimation from '../../public/assets/animations/loading.json'
import Lottie from 'lottie-react';

const Spinner = () => {
    return (
        <div className="h-[90vh] w-full flex flex-col items-center justify-center">
            {/* <span className="loading loading-dotted text-gray-500 w-10"></span> */}
            <Lottie animationData={loadingAnimation} className='w-20'></Lottie>
        </div>
    );
};

export default Spinner;