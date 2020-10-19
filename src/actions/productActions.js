import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from '../constants/productConstants';
import { fetchProductdetails, fetchProducts } from "../api/product";


const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        });
        const products = await fetchProducts();
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: products
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.errorMessage
        })
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
            payload: productId
        });
        const product = await fetchProductdetails(productId);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: product
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.errorMessage
        })
    }
}

export { listProducts, detailsProduct };