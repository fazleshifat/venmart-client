import React from 'react';
import { Link, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { useEffect } from 'react';

const ErrorPage = () => {
    window.scroll(0, 0)

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    useEffect(() => {
        document.getElementById("title").innerText = "error"
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-6">

            {/* Error Image */}
            <img
                src="/assets/error.png" // Replace with your actual image path
                alt="Error"
                className="max-w-4/12 mb-4"
            />

            {/* Heading */}
            <h1 className="text-2xl md:text-6xl font-extrabold text-primary mb-4">Oops!</h1>

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
