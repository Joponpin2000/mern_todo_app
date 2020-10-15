import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productConstants';
const { fetchProducts } = require("../api/product");


const listProducts = () => async (dispatch) => {
    try {

        dispatch({
            type: PRODUCT_LIST_REQUEST
        });
        const { data } = await fetchProducts();
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.Errormessage
        })
    }
}

export { listProducts };