import axios from 'axios'
export function addTask(taskName, description, endDate) {
    return async (dispatch, getState)=>{
        const response = await axios.get(`https://taskscheduler-be7db.firebaseio.com/users/<${getState().auth.keyForBD}>/listOfTasks.json`)
        let taskListLength = await axios
        if(taskListLength === undefined)
            taskListLength = 0;

          const newTask = {
              taskName, description, endDate
          };

          await axios.put(`https://taskscheduler-be7db.firebaseio.com/users/<${getState().auth.keyForBD}>/listOfTasks/${taskListLength}.json`, newTask)
        dispatch(forReducer())

    }

}
function forReducer() {
    return{
        type:'ADD_TASK',

    }


}