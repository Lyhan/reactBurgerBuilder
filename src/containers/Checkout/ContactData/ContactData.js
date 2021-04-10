import React, {Component} from "react";

import classes from './ContactData.css'
import Button from "../../../components/UI/Button/Button";
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading:false
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
        let form = (<form>
            <Input inputtype="input" type="text" name="name" placeholder="Your name"/>
            <Input inputtype="input" type="email" name="email" placeholder="Your email"/>
            <Input inputtype="input" type="text" name="street" placeholder="Your Street"/>
            <Input inputtype="input" type="text" name="postal" placeholder="Postal Code"/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>)
        if (this.state.loading) form = <Spinner/> ;
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}

            </div>
        );
    }

}

export default ContactData;