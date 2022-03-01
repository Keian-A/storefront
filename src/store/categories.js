const initalState = {
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
};

const categoryReducer = (state = initalState, action) => {
    // Removed payload
    let { type } = action;

    switch (type) {
        // Add cases to manipulate state here
        default:
            return state;
    }
}

// Add relating exported functions to manipulate state here

export default categoryReducer;
