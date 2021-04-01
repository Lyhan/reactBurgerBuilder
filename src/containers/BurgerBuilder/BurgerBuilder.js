import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    checkPurchasableState(ingredients) {
        let total = Object.keys(ingredients).map(igKey => ingredients[igKey])
            .reduce((total, amount) => total + amount, 0);
        this.setState({purchasable: total > 0});
    }

    addIngredientHandler = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] += 1;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        });
        this.checkPurchasableState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        if (!updatedIngredients[type]) return;
        updatedIngredients[type] -= 1;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
        });
        this.checkPurchasableState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert("Continue purchase request");
    }

    render() {
        const disabledIngredients = {...this.state.ingredients};
        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    price={this.state.totalPrice}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledIngredients={disabledIngredients}
                    purchase={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;