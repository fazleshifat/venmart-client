import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-6">

            {/* Error Image */}
            <img
                src="/assets/error.png" // Replace with your actual image path
                alt="Error"
                className="max-w-md mb-8"
            />

            {/* Heading */}
            <h1 className="text-6xl font-extrabold text-primary mb-4">Oops!</h1>

            {/* Subheading */}
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">404 - Page Not Found</h2>

            {/* Description */}
            <p className="text-gray-600 text-base max-w-lg mb-6">
                The page you're looking for doesn't exist or has been moved. Please check the URL or go back to the homepage.
            </p>

            {/* Button */}
            <Link to="/" className="btn btn-primary">
                ⬅ Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
