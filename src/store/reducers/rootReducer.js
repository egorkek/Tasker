import {combineReducers} from 'redux'
import authReducer from "./auth"
import tasks from "./tasks";

export default combineReducers({
    auth: authReducer,
    tasks: tasks


})