// Redux imports
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Esoteric imports
import categorySlice from './categories.js';
import productSlice from './products.js';
import cartSlice from './cart.js';

const reducers = combineReducers({
    categories: categorySlice.reducer,
    products: productSlice.reducer,
    cart: cartSlice.reducer,
});

const store = configureStore({ reducer: reducers })

export default store;
