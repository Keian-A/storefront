const initalState = [];

const cartReducer = (state = initalState, action) => {
    let { type, payload } = action;

    switch (type) {
        case "ADD_CART_ITEM":
            return [...state, { item: payload }];
        default:
            return state;
    }
}

export const addCartItem = (item) => {
    return {
        type: "ADD_CART_ITEM",
        payload: item
    }
}

export default cartReducer;
