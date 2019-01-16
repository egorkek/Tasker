import React, {Fragment} from 'react'
import classes from './Landing.css'
import Button from '../../components/UI/Button/Button'
import Input from "../../components/UI/Input/Input";
import is from 'is_js'
import {connect} from "react-redux";
import {auth} from "../../store/actions/auth";
import {NavLink} from 'react-router-dom'


class Landing extends React.Component{
    state = {
        allValid: false,
        formControls:{
            Email:{
                value: '',
                isValid: true,
                isTouched: false,
                type: 'text',
                label:'Email'
            },
            password:{
                value: '',
                isValid:true,
                isTouched:false,
                type: 'password',
                label:'password'
            }
        }

    };
    onChangeHandler = (e, control)=>{
        control.isTouched = true;
        control.value = e.target.value;
        const formControls = this.state.formControls;
        if (control.label === 'Email'){
            if (is.email(control.value)){
                control.isValid = true
            }
            else {
                control.isValid = false
            }

        }
        if (control.label === 'password'){
            if(control.value.length >=6){
                control.isValid = true
            }
            else {
                control.isValid = false
            }
        }
        formControls[control.label] = control;


        this.setState({
            formControls
        });
        const names = Object.keys(this.state.formControls);



        let count = 0;
        for (let i=0; i<names.length;i++){
            if (formControls[names[i]].isValid && formControls[names[i]].isTouched){
                count ++;

            }
        }
        if (count === names.length){
            this.setState({
                allValid: true

            })

        }

    };
     enterButtonClickHandler = (x) =>{
         x ?
             this.props.auth(this.state.formControls.Email.value, this.state.formControls.password.value, true) :
             this.props.auth(this.state.formControls.Email.value, this.state.formControls.password.value, false)



         this.setState({
             allValid: false,
             formControls:{
                 Email:{
                     value: '',
                     isValid: true,
                     isTouched: false,
                     type: 'text',
                     label:'Email'
                 },
                 password:{
                     value: '',
                     isValid:true,
                     isTouched:false,
                     type: 'password',
                     label:'password'
                 }
             }

         })

     }

    render(){

        const email = this.state.formControls.Email;
        const password = this.state.formControls.password;
    return(
        <Fragment>
        <div className={classes.Landing}>
            <div>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus exercitationem itaque laborum qui quis? Architecto aut consectetur consequuntur, dolorum nam pariatur sit tempora? Amet dolorem hic, laudantium repudiandae rerum vel.
                <div>
                    <Input isValid={email.isValid} label={email.label} value={email.value} onChange={(e)=>this.onChangeHandler(e, email)}/>
                    <Input label={password.label} isValid={password.isValid} type={password.type} value={password.value} onChange={(e)=>this.onChangeHandler(e, password)}/>
                    <Button disabled={!this.state.allValid} onClick={()=>this.enterButtonClickHandler(0)}>Зарегестрироваться</Button>
                    <NavLink to={'/main'} >
                        <Button type={'green'} disabled={!this.state.allValid} onClick={()=>this.enterButtonClickHandler(1)}>Войти</Button>
                    </NavLink>
                </div>

            </div>
            <div>
                <i className="far fa-calendar-alt"></i>
            </div>

        </div>

        </Fragment>
    )

    }

}

function mapDispatchToProps(dispatch) {
    return{
        auth:(email, password, isLogin)=> dispatch(auth(email,password, isLogin))

    }
    
}
function mapStateToProps(state) {
    return{
        state: state.auth
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);