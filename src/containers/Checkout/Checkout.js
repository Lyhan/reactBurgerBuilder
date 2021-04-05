import React, {Component} from 'react';
import {Route} from 'react-router-dom';

//import queryString from 'query-string';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: [],
        totalPrice: 0
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack()

    }
    checkoutContinuedHandler = () => {
        console.log(this.props.match);
        this.props.history.replace('/checkout/contact-data')
    }

    componentDidMount() {
        //let params = queryString.parse(this.props.location.search);
        const query = new URLSearchParams(
            this.props.location.search
        );
        let price;

        let ingredients = {};

        for (let params of query.entries()) {
            if(params[0] === 'price'){
                price = params[1];
            }else {
                ingredients[params[0]] = parseInt(params[1]);
            }
        }
        this.setState({ingredients:ingredients,totalPrice:price})
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.state.ingredients}/>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    // Passing {...props} is another way to make the routing available for components not loaded directly through Route
                    render={()=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...this.props}/>)}/>
            </div>

        );
    }

}

export default Checkout;