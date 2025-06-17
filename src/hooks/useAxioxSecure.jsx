import axios from "axios";
import React, { use, useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
    const { user, userSignOut, loading } = use(AuthContext);

    useEffect(() => {
        if (!loading && user?.accessToken) {
            // Add request interceptor
            const requestInterceptor = axiosInstance.interceptors.request.use(
                (config) => {
                    config.headers.Authorization = `Bearer ${user.accessToken}`;
                    return config;
                }
            );

            // Add response interceptor
            const responseInterceptor = axiosInstance.interceptors.response.use(
                (res) => res,
                (err) => {
                    if (err?.response?.status === 401 || err?.response?.status === 403) {
                        userSignOut()
                            .then(() => {
                                console.log("Logged out due to token issue.");
                            })
                            .catch(console.error);
                    }
                    return Promise.reject(err);
                }
            );

            // Cleanup to prevent multiple interceptors on re-renders
            return () => {
                axiosInstance.interceptors.request.eject(requestInterceptor);
                axiosInstance.interceptors.response.eject(responseInterceptor);
            };
        }
    }, [user, loading]);

    return axiosInstance;
};

export default useAxiosSecure;