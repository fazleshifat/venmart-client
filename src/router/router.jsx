import {
    createBrowserRouter,
} from "react-router";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
]);