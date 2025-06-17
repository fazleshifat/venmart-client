import {
    createBrowserRouter,
} from "react-router";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import ProductByCategory from "../pages/ProductByCategory";
import AddProduct from "../pages/AddProduct";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";
import CartSection from "../pages/CartSection";
import MyProduct from "../pages/MyProduct";
import CategorySection from "../pages/CategorySection";
import PrivateRoute from "../AuthProvider/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/logIn',
                Component: LogIn,
            },
            {
                path: '/register',
                Component: Register,
            },
            ,
            {
                path: '/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },

            {
                path: '/categories',
                Component: CategorySection
            },
            {
                path: '/allProducts',
                element: <PrivateRoute>
                    <AllProducts></AllProducts>
                </PrivateRoute>
            },
            {
                path: '/product/details/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>
            },
            {
                path: `/products/:category`,
                element: <PrivateRoute>
                    <ProductByCategory></ProductByCategory>
                </PrivateRoute>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>
            },
            {
                path: '/myProduct',
                element: <PrivateRoute>
                    <MyProduct></MyProduct>
                </PrivateRoute>
            }
            ,
            {
                path: '/cart',
                element: <PrivateRoute>
                    <CartSection></CartSection>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
]);