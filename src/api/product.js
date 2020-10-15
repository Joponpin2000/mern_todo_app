import axios from 'axios';
import { getCookie } from '../helpers/cookies';

export const createProduct = async (formData) => {

    let cookie = getCookie("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            Cookie: "token=" + cookie + "",
        },
        withCredentials: true
    }

    const response = await axios.post('/api/product', formData, config);

    return response;
}

export const fetchProducts = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }

    const data = await axios.get('http://localhost:4000/api/products', config);

    return data;
}