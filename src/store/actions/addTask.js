import axios from 'axios'
export function addTask(taskName, description, endDate) {
    return async (dispatch, getState)=>{
        const tasks = getState().auth.tasks;
        tasks.push({
            taskName, description, endDate
        })
        dispatch(forReducer(tasks));


    }

}
function forReducer(tasks) {
    return{
        type:'ADD_TASK',
        tasks

    }


}