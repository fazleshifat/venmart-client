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
import CategoryCards from "../components/Category/CategoryCards";
import UpdateProduct from "../pages/UpdateProduct";

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
                loader: async () => await fetch('http://localhost:3000/allProducts'),
                Component: AllProducts
            },
            {
                path: '/product/details/:id',
                loader: async ({ params }) => await fetch(`http://localhost:3000/allProducts/${params.id}`),
                Component: ProductDetails
            },
            {
                path: '/categories',
                Component: CategoryCards
            }
            ,
            {
                path: `/products/:category`,
                loader: async ({ params }) => await fetch(`http://localhost:3000/products/${params.category}`),
                Component: ProductByCategory
            },
            {
                path: '/addProduct',
                Component: AddProduct
            },
            {
                path: '/updateProduct/:id',
                loader: async ({ params }) => await fetch(`http://localhost:3000/allProducts/${params.id}`),
                Component: UpdateProduct
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
]);