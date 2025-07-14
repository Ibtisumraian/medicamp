import axios from 'axios';
import React from 'react';

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://medicamp-server-three.vercel.app'
    })
    return axiosSecure
};

export default useAxiosSecure;