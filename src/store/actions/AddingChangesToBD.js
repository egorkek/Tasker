import axios from 'axios'

export async function addTasksToBD(store) {
    console.log('store changed',store.getState());
    const tasks = store.getState().auth.tasks;
    const nameForBD = store.getState().auth.keyForBD;
    try{
        await axios.put(`https://taskscheduler-be7db.firebaseio.com/users/${nameForBD}/listOfTasks.json`, tasks)
        console.log('posted');



    }
    catch (e) {
        console.log(e)

    }



}