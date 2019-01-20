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
                email,
                listOfTasks:{

                }


            };

            await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDJHO8YGwRavnNLmCryDKXOic-ChroRlFo', authData);
            axios.put(`https://taskscheduler-be7db.firebaseio.com/users/${dbName}.json`, dataForBD );

        }
        if(isLogin){
        const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDJHO8YGwRavnNLmCryDKXOic-ChroRlFo', authData);
        const idToken = response.data.idToken;
        const expirationDate = new Date(new Date().getTime() +response.data.expiresIn * 1000);

        localStorage.setItem('token', idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('keyForBD', dbName);
        localStorage.setItem('email', authData.email)
        console.log(localStorage);

        // const info = await axios.get(`https://taskscheduler-be7db.firebaseio.com/users/<${response.data.email.replace('@', '').replace('.', '')}>.json`);
        dispatch(login(authData.email, idToken, dbName));
        dispatch(getTasks());
        dispatch(autoLogout(response.data.expiresIn))




        }

    }

}



export function autoLogout(time) {
    return dispatch=>{
        setTimeout(()=>{
            logout()

        }, time*1000)
    }

};
export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('keyForBD');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('email')

    return{
        type: 'LOGOUT'
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
export function autoLogin() {
    return (dispatch,getState) =>{
        const token  = localStorage.getItem('token');
        const keyForBD = localStorage.getItem('keyForBD');
        console.log(token, keyForBD)
        if (!token){
            dispatch(logout())
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()){
                dispatch(logout());
            }
            else {

                dispatch(login(localStorage.getItem('email'),token,keyForBD));
                dispatch(getTasks())
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime())/1000));

            }
        }
    }
    
}

