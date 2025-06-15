import { useEffect } from 'react';
import { useLocation } from 'react-router';

const RouteTitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const pathTitleMap = {
            '/': 'Home | Your App',
            '/products': 'All Products | Your App',
            '/about': 'About Us | Your App',
            '/contact': 'Contact | Your App',
            '/dashboard': 'Dashboard | Your App',
        };

        const title = pathTitleMap[location.pathname] || 'Your App';
        document.title = title;
    }, [location.pathname]);

    return null; // this component does not render anything
};

export default RouteTitleUpdater;