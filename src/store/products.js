import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                name: 'Apple',
                category: 'Food',
                inventoryCount: 1000,
                price: 1.00,
                description: 'Delicious red apples!',
                specifications: 'Product specs.',
                userReviews: ['A list of reviews']
            },
            {
                name: 'Banana',
                category: 'Food',
                inventoryCount: 1000,
                price: 2.00,
                description: 'Imported directly from India!',
                specifications: 'Product specs.',
                userReviews: ['A list of reviews']
            },
            {
                name: 'TV',
                category: 'Electronics',
                inventoryCount: 30,
                price: 1.00,
                description: '50" Television',
                specifications: 'Product specs.',
                userReviews: ['A list of reviews']
            },
            {
                name: 'Calculator',
                category: 'Electronics',
                inventoryCount: 40,
                price: 1.00,
                description: '',
                specifications: 'Product specs.',
                userReviews: ['A list of reviews']
            },
            {
                name: 'DS',
                category: 'Console',
                inventoryCount: 30,
                price: 1.00,
                description: 'Nintendo DS',
                specifications: 'Product specs.',
                userReviews: ['A list of reviews']
            },
            {
                name: 'PS4',
                category: 'Console',
                inventoryCount: 30,
                price: 1.00,
                description: 'Built by Sony',
                specifications: 'Product specs.',
                userReviews: ['A list of reviews']
            },
        ]
    },
    reducers: {
        addProduct(state, action) {
            state.products.push(action.payload);
        }
    }
});

export default productSlice;
