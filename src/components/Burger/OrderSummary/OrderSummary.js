import React from 'react';
import Aux from '../../../hoc/Auxilary'; 
import Button from '../../UI/Button/Button';
const orderSummary =(props)=> {
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
        return (
        <li key={igKey}>
             <span>{igKey}</span>:{props.ingredients[igKey]}
        </li>);
    });


    return (
        <Aux>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredient :</p>
            <ul>
               {ingredientSummary}
               <p><b>Total Price: {props.price.toFixed(2)}</b> </p>
               <p> Continue to checkout?</p>
               
               <Button btnType="Danger" clicked={props.cancelled}>Cancel</Button>
               <Button btnType="Success" clicked={props.continue}>Continue</Button>
            </ul>
        </Aux>
    );
}
export default orderSummary;