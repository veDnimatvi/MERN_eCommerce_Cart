import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProductDetails: getProductDetailsReducer,
    getProducts: getProductsReducer
})

const middleware = [thunk];

const cartFromLocalStore = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const INITSTATE_STATE = {
    cart: {
        cartItems: cartFromLocalStore
    }
}
const store = createStore(
    reducer,
    INITSTATE_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;