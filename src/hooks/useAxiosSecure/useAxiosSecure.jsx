import axios from 'axios';
import React from 'react';

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://medicamp-server-three.vercel.app'
    })

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
         
         
    return axiosSecure
};

export default useAxiosSecure;