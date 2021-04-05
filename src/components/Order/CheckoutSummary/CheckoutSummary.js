import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import Spinner from "../../UI/Spinner/Spinner";
import classes from './CheckoutSummary.css';
import axios from "../../../axios-orders";

const CheckoutSummary = (props) => {
    console.log(props)
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType={"Danger"}
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                btnType={"Success"}
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}


/*class CheckoutSummary extends Component {
    state = {
        loading: false,
        purchasing: false
    }

    handleOrder = () => {
        this.setState({loading: true, purchasing: true})
        axios.post('/orders.json', this.props.order)
            .then(response => {
                this.setState({loading: false, purchasing: false})
                console.log(response)
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false})
                console.log(error)
            });
    }

    handleCancel = ()=>{
        this.props.history.push('/');
    }

    render() {
        let spinner =  this.state.loading ? <Spinner/> : null;
        return (
            <div className={classes.CheckoutSummary}>
                <h1>We hope it tastes well!</h1>
                <div style={{width: '100%', margin: 'auto'}}>
                    <Burger ingredients={this.props.order.ingredients}/>
                </div>
                {spinner}
                <Button
                    btnType={"Danger"}
                    clicked={this.handleCancel}>CANCEL</Button>
                <Button
                    btnType={"Success"}
                    clicked={this.handleOrder}>CONTINUE</Button>
            </div>
        )
    }
}*/

export default withRouter(CheckoutSummary);