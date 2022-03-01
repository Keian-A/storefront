const initalState = {
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
            price: 1.00,
            description: 'Imported directly from India!',
            specifications: 'Product specs.',
            userReviews: ['A list of reviews']
        },
        {
            name: 'TV',
            category: 'Electronics',
            inventoryCount: 30,
            price: 1.00,
            description: '52" Television',
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
}

const productReducer = (state = initalState, action) => {
    let { type, payload } = action;

    switch (type) {
        case "ADD_PRODUCT":
            return { ...state, products: [...state.products, payload] };
        default:
            return state;
    }
}

export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}

export default productReducer;
