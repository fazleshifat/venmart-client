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
        document.getElementById("title").innerText = "Page Not Found"
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f1f5f9] dark:from-[#0f172a] dark:via-[#1e1b4b] dark:to-[#0f172a] text-center px-6">

            {/* Error Image */}
            <img
                src="/assets/error.png"
                alt="Error"
                className="max-w-xs md:max-w-sm mb-8 opacity-80"
            />

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-gradient mb-4">Oops!</h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-400 dark:text-gray-500 mb-3">404 - Page Not Found</h2>

            {/* Description */}
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
                The page you're looking for doesn't exist or has been moved. Please check the URL or head back to the homepage.
            </p>

            {/* Button */}
            <Link to="/" className="btn btn-primary-gradient rounded-xl px-8 text-sm font-medium">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
