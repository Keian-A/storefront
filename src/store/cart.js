import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            let temp = true;
            for (let ii = 0; ii < state.length; ii++) {
                if (state[ii].item.name === action.payload.name) {
                    temp = false;
                }
            }
            if (temp) {
                state.push({ item: action.payload, count: 1 });
            }
        },
        remove(state, action) {
            return state.filter(element => element.item.name !== action.payload.name);
        },
        addItemToCart(state, action) {
            for (let ii = 0; ii < state.length; ii++) {
                if (state[ii].item.name === action.payload.item.name) {
                    state[ii].count++;
                }
            }
        },
        removeItemFromCart(state, action) {
            for (let ii = 0; ii < state.length; ii++) {
                if (state[ii].item.name === action.payload.item.name) {
                    state[ii].count--;
                }
            }
        }
    }
});

export const { add, remove, addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice;
