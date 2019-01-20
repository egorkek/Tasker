const initialState={
    isLogin: false,
    username: false,
    idToken: '',
    keyForBD: '',
    loading: true,
    tasks: []
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;

        case 'LOG_IN':
            return{
                ...state,
                isLogin: true,
                username: action.email,
                idToken: action.idToken,
                keyForBD: action.keyForBD
            };
        case 'ADD_TASK':
            return{
                ...state,
                tasks:action.tasks
            };
        case 'FETCH_TASKS_START':
            return{
                ...state, loading: true
            };
        case 'FETCH_TASKS_SUCCESS':
            return{
                ...state,
                tasks: action.tasks,
                loading: false

            };
        case 'FETCH_TASKS_ERROR':
            return{
                ...state,
                loading: false
            }

    }

}