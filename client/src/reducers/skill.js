const skillReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SKILLS':
            return action.payload;

        default:
            return state;
    }
}

export default skillReducer;