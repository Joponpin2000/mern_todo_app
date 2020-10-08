import axios from 'axios';
import { getCookie } from '../helpers/cookies';

export const createCategory = async (formData) => {
    let cookie = getCookie("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Cookie: "token=" + cookie + "",
        },
        withCredentials: true
    }

    const response = await axios.post('http://localhost:4000/api/category', formData, config);
    return response;
}

export const getCategories = async () => {
    let cookie = getCookie("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Cookie: "token=" + cookie + "",
        },
        withCredentials: true
    }
    const response = await axios.get('http://localhost:4000/api/category', config);

    return response;
}