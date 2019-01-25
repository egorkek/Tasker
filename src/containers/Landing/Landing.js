import React, {Fragment} from 'react'
import classes from './Landing.css'
import image from '../../images/checked.svg'
import {NavLink} from 'react-router-dom'
import Button from "../../components/UI/Button/Button";
import LogIn from "../LogIn/LogIn";


class Landing extends React.Component {
    state={
        clicked:false
    }
    clickHandler=()=>{
        this.setState({
            clicked:true
        })
    }

    render() {


    return(

            <Fragment>
                    <div className={this.state.clicked ? `${classes.Landing} ${classes.downed}` : classes.Landing }>
                        <div>
                            <h1>Держите  свою жизнь под контролем</h1>
                            <h2>c BUMAGAGA выполнять повседневные задачи стало проще</h2>
                            <ul>
                                <li>
                                    <object data={image} type="image/svg+xml"> </object>
                                    <span>Планируете ли вы отпуск?</span>
                                </li>
                                <li>
                                    <object data={image} type="image/svg+xml"> </object>
                                    <span>А может управляете одновременно несколькими проектами?</span>
                                </li>
                                <li>
                                    <object data={image} type="image/svg+xml"> </object>
                                    <span>Хотите ли составить список фильмов для просмотра?</span>
                                </li>
                                <p>Вам поможет BUMAGAGA, здесь вы можете планировать
                                    выполнение, как личных, так и профессиональных задач.</p>
                                <div className={classes.btn}>
                                    <Button type={'red'} onClick={()=>this.clickHandler()}>ПРИСОЕДЕНИТЬСЯ</Button>
                                </div>



                            </ul>

                        </div>



                    </div>
                <LogIn/>
            </Fragment>

        )
         }

}


export default Landing;