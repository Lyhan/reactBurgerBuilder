import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop';


const Modal = props => (
    <Aux>
        <Backdrop clicked={props.modalClose} show={props.show}/>
    <div className={classes.Modal}
         style={{
             transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
             opacity: props.show ? '1' : '0'
         }}>
        {props.children}
    </div>
    </Aux>
)

Modal.propTypes = {
    modalClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
}
export default Modal;