import React from 'react';
import { use } from 'react';
import { AuthContext } from './AuthContext';
import Spinner from '../components/Spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <Spinner></Spinner>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to='/logIn' state={location.pathname} replace></Navigate>
};

export default PrivateRoute;