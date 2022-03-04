import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [
            {
                displayName: 'Food',
                normalizedName: 'food',
                description: 'Edible products.'
            },
            {
                displayName: 'Electronics',
                normalizedName: 'electronics',
                description: 'All your wiring and electronic needs!'
            },
            {
                displayName: 'Console',
                normalizedName: 'console',
                description: 'Gaming consoles.'
            },
            {
                displayName: 'Phones',
                normalizedName: 'phones',
                description: 'Handheld portable supercomputers.'
            },
            {
                displayName: 'Games',
                normalizedName: 'games',
                description: 'Products to inspire competition or to conquer boredom!'
            },
        ]
    },
    reducers: {
        addCategory(state, action) {
            state.categories.push(action.payload);
        }
    }
});

export default categorySlice;
