const initalState = [];

const cartReducer = (state = initalState, action) => {
    let { type, payload } = action;

    switch (type) {
        case "ADD_CART_ITEM":
            let temp = true;
            for (let ii = 0; ii < state.length; ii++) {
                if (state[ii].item.name === payload.name) {
                    temp = false;
                }
            }
            if (temp) {
                return [...state, { item: payload }];
            }
            return state;
        case "DELETE_CART_ITEM":
            return state.filter(element => element.item.name !== payload.name);
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

export const deleteCartItem = (item) => {
    return {
        type: "DELETE_CART_ITEM",
        payload: item
    }
}

export default cartReducer;
