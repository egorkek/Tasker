import axios from 'axios'

export async function addTasksToBD(store) {

    const tasks = store.getState().auth.tasks;
    if (tasks) {
        const nameForBD = store.getState().auth.keyForBD;
        try {
            await axios.put(`https://taskscheduler-be7db.firebaseio.com/users/${nameForBD}/listOfTasks.json`, tasks)


        }
        catch (e) {
            console.log(e)

        }
    }



}