// import composeWithDevTools from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer } from './reducers/productReducers';

// const middleware = [thunk];
const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;