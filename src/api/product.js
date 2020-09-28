import axios from 'axios';

export const createProduct = async (formData) => {

    const response = await axios.post('http://localhost:4000/api/category', formData);

    return response;
}
