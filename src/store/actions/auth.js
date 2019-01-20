import axios from 'axios'
import {getTasks} from './getTasks'

export function auth(email, password, isLogin) {
    return async (dispatch, getState) =>{
        const authData = {
            email,password, returnSecureToken: true
        };
        const dbName = authData.email.replace('@', '').replace('.', '');
        if (!isLogin) {
            console.log(authData);
            const dataForBD = {
                email


            };

            await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDJHO8YGwRavnNLmCryDKXOic-ChroRlFo', authData);
            axios.put(`https://taskscheduler-be7db.firebaseio.com/users/${dbName}.json`, dataForBD );

        }
        if(isLogin){
        const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDJHO8YGwRavnNLmCryDKXOic-ChroRlFo', authData);
        const idToken = response.data.idToken;

        // const info = await axios.get(`https://taskscheduler-be7db.firebaseio.com/users/<${response.data.email.replace('@', '').replace('.', '')}>.json`);
        dispatch(login(authData.email, idToken, dbName));
            console.log(getState().auth.keyForBD);
            dispatch(getTasks())




        }

    }

}
function login(info, idToken, keyForBD) {
    return{
        type: 'LOG_IN',
        email: info,
        idToken,
        keyForBD
    }

}

