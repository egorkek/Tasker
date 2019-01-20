export function addTask(taskName, description, endDate) {
    return async (dispatch, getState)=>{
        let tasks = getState().auth.tasks;
        if (!getState().auth.tasks)
            tasks = []
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