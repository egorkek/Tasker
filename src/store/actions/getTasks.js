import axios from 'axios'

export function getTasks() {
    return async (dispatch, getState)=>{
        console.log(getState().auth.keyForBD);

        dispatch(fetchTasksStart());
        try {
            const response = await axios.get(`https://taskscheduler-be7db.firebaseio.com/users/<${getState().auth.keyForBD}>/listOfTasks.json`)
            console.log(getState().auth.keyForBD);
            dispatch(fetchTasksSuccess(response.data))


        }
        catch (e) {
            dispatch(fetcTasksError(e))


        }


    }

}
function fetchTasksSuccess(tasks) {
    return{
        type: 'FETCH_TASKS_SUCCESS',
        tasks
    }

}

function fetchTasksStart(){
    return{
        type:'FETCH_TASKS_START'
    }
}

export function fetcTasksError(e) {
    return{
        type: 'FETCH_TASKS_ERROR',
        error: e
    }


};