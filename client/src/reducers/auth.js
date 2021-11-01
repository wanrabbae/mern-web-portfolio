const authReducer = (state = [], action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                token: action.payload.token,
                    isLogged: action.payload.isLogged
            };

        default:
            return state;
    }
}

export default authReducer;