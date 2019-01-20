export function deleteTask(index) {
    return (dispatch, getState)=> {
        console.log(index)
        const tasks = getState().auth.tasks;
        index === 0 ? tasks.shift() :
        tasks.splice(index,1);
        dispatch(deleteTaskForReducer(tasks))
        console.log(getState().auth.tasks)

    }

}

function deleteTaskForReducer(tasks) {
    return{
        type:'DELETE_TASK',
        tasks
    }

}

