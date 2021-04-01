import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'

import classes from './SideDrawer.css'

class SideDrawer extends Component {
    render(){
        let attachedClasses = [ classes.SideDrawer]
        this.props.open ? attachedClasses.push(classes.Open) : attachedClasses.push(classes.Close)
        return (
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.close}/>
                <div className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo/>
                    </div>
                    <nav>
                        <NavigationItems/>
                    </nav>
                </div>
            </Aux>
        );
    }
}
/*
const SideDrawer = (props) => {
    let attachedClasses = [ classes.SideDrawer]
    props.open ? attachedClasses.push(classes.Open) : attachedClasses.push(classes.Close)
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}
*/
SideDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
}
export default SideDrawer;