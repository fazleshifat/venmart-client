import React from 'react';

const Spinner = () => {
    return (
        <div className="h-screen w-full flex justify-center">
            <span className="loading loading-infinity text-gray-500 w-14"></span>
        </div>
    );
};

export default Spinner;