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
            {
                path: '/allProducts',
                loader: () => fetch('http://localhost:3000/allProducts'),
                Component: AllProducts
            },
            {
                path: '/product/details/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/allProducts/${params.id}`),
                Component: ProductDetails
            },
            {
                path: `/products/:category`,
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.category}`),
                Component: ProductByCategory
            },
            {
                path: '/addProduct',
                Component: AddProduct
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
]);