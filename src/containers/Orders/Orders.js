import React, {Component} from 'react';

import Order from "../../components/Order/Order";
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
    state={
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json').then((res=>{
            const fetchedOrders = []
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                })

            }
            this.setState({loading:false, orders: fetchedOrders});
            console.log(fetchedOrders)
        })).catch( err=>{
            this.setState({loading:false})
        })
    }

    render() {
        let orders = <Spinner/>
        if (this.state.orders.length > 0) {
            console.log(this.state.orders)
            orders = (this.state.orders.map(ord => <Order key={ord.id} ingredients={ord.ingredients} price={ord.price}/>))
        }
        return (
            <div>
                {orders}
            </div>);
    }
}

export default withErrorHandler(Orders,axios);