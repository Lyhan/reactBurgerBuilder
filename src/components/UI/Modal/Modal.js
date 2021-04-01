import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop';


class Modal extends React.Component {
    shouldComponentUpdate(nextProps,nextState){
       return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    componentDidUpdate(){
        console.log("Modal ' componentDidUpdate'");
    }

    render() {
        return (
            <Aux>
                <Backdrop clicked={this.props.modalClose} show={this.props.show}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

Modal.propTypes = {
    modalClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
}
export default Modal;