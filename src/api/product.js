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

    const response = await axios.get('http://localhost:4000/api/products', config);
    return response.data.products;
}

export const fetchProductdetails = async (productId) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }

    const response = await axios.get('http://localhost:4000/api/products/' + productId, config);
    return response.data.product;
}