import React, {Component} from "react";

import classes from './ContactData.css'
import Button from "../../../components/UI/Button/Button";
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    createField(elementType, inputType, placeholder, options) {
        let elementConfig = {};
        elementConfig['type'] = inputType ? inputType : null;
        elementConfig['placeholder'] = placeholder ? placeholder : null;
        elementConfig['options'] = options ? options : null;

        return {
            elementType: elementType,
            elementConfig: elementConfig,
            value: ''
        }
    }

    state = {
        orderForm: {
            name: this.createField('input', 'text', 'Yout Name'),
            street: this.createField('input', 'text', 'Street'),
            zipCode: this.createField('input', 'text', 'ZIP Code'),
            country: this.createField('input', 'text', 'Country'),
            email: this.createField('input', 'email', 'Yout E-Mail'),
            deliveryMethod: this.createField('select', null, null, [
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'},
            ])
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        let order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'jose',
                address: {
                    street: 'testStreet',
                    zipCode: 12341,
                    country: 'Germany'
                },
                email: 'test@test.com',
                deliveryMethod: 'fastest'
            }
        }
        this.setState({loading: true, purchasing: true})
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                // console.log(response)
                console.log(this.props)
                this.props.history.replace('/');
            })
            .catch(error => {
                this.setState({loading: false})
                // console.log(error)
            });
    }

    render() {
        // TODO: Output Input element dynamically using state.orderForm
        // <Input elementType="..." elementConfig="..." value="..."/>
        let form = (<form>

            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>)
        if (this.state.loading) form = <Spinner/>;
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}

            </div>
        );
    }

}

export default ContactData;