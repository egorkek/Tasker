const initialState={
    isLogin: false,
    username: false,
    idToken: '',
    keyForBD: ''
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;

        case 'LOG_IN':
            return{
                isLogin: true,
                username: action.email,
                idToken: action.idToken,
                keyForBD: action.keyForBD
            }

    }

}