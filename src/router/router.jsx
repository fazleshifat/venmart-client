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
import CartSection from "../pages/CartSection";
import MyProduct from "../pages/MyProduct";
import CategorySection from "../pages/CategorySection";

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
                Component: AddProduct
            },

            {
                path: '/categories',
                Component: CategorySection
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
                path: `/products/:category`,
                loader: async ({ params }) => await fetch(`http://localhost:3000/products/${params.category}`),
                Component: ProductByCategory
            },
            {
                path: '/updateProduct/:id',
                loader: async ({ params }) => await fetch(`http://localhost:3000/allProducts/${params.id}`),
                Component: UpdateProduct
            },
            {
                path: '/myProduct',
                loader: async () => await fetch('http://localhost:3000/allProducts'),
                Component: MyProduct
            }
            ,
            {
                path: '/cart',
                loader: async () => await fetch('http://localhost:3000/product/cart'),
                Component: CartSection
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
]);