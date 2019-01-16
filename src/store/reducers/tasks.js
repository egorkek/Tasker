const initialState={
    loading: true,
    tasks: []

};
export default function tasks(state=initialState, action) {
    switch (action.type) {
        default:
            return state;

        case 'ADD_TASK':
            return{
                state
            };
        case 'FETCH_QUIZES_START':
            return{
                ...state, loading: true
            }
        case 'FETCH_QUIZES_SUCCESS':
            return{
                tasks: state.tasks,
                loading: false

            }


    }

}