import React from 'react'
import classes from './Header.css'
import Button from '../UI/Button/Button'

class Header extends React.Component{
    state={
        isOpen:false
    };
    openMenuButtonHandler = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    render() {
        const cls = ['fa', this.state.isOpen ? 'fa-times' : 'fa-bars'];
        return (
            <div className={classes.Header}>

                <Button type={'headerBtn'} onClick={this.openMenuButtonHandler}><i className={cls.join(' ')}/></Button>
            </div>
        )
    }

};

export default Header