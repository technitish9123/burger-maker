import React, { Component} from "react";
//import BuildControl from "../../components/Burger/BuildControls/BuildControl/BuildControl";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Auxilary from "../../hoc/Auxilary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES={
  salad:30,
  cheese:50,
  meat:100,
  bacon:50
}

class BurgerBuilder extends Component {
 
 
 state={
   ingredients:{
     salad:0,
     bacon:0,
     cheese:0,
     meat:0
   },
   totalPrice:150,
   purchaseable:false,
   purchasing:false
 }
 
 addIngredientHandler =( type) =>{
   const oldCount=this.state.ingredients[type];
   const updatedCount = oldCount+1;
   const updatedIngredients = {
     ...this.state.ingredients
   };
   updatedIngredients[type]=  updatedCount;
   const priceAddition = INGREDIENT_PRICES[type];
   const oldPrice=this.state.totalPrice;
  const newPrice = oldPrice+priceAddition;
  this.setState({totalPrice: newPrice, ingredients:updatedIngredients});

 }

 removeIngredientHandler=(type)=>{
   
  const oldCount=this.state.ingredients[type];

  if(oldCount<=0){
    return;
  }
  const updatedCount = oldCount-1;
  const updatedIngredients = {
    ...this.state.ingredients
  };
  updatedIngredients[type]=  updatedCount;
  const priceDeduction = INGREDIENT_PRICES[type];
  const oldPrice=this.state.totalPrice;
 const newPrice = oldPrice-priceDeduction;
 this.setState({totalPrice: newPrice, ingredients:updatedIngredients});

 }

purchaseHandler =()=> {
  this.setState({purchasing:true});
}



purchaseCancelHandler =()=> {
  this.setState({purchasing:false});
}
purchaseContinueHandler= () =>{
   alert('you are about to continue!')
}

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key]=  disabledInfo[key]<=0
    };
    return (
      <Auxilary>
        <Modal show={this.state.purchasing}
         modalClosed={this.purchaseCancelHandler}
        > 
          <OrderSummary
           ingredients={this.state.ingredients}
           cancelled={this.purchaseCancelHandler}
           continue={this.purchaseContinueHandler}
           price={this.state.totalPrice}
            />
        </Modal>
        <Burger ingredients={this.state.ingredients} />

        <BuildControls
        ingredientAdded={this.addIngredientHandler} 
        ingredientRemoved={this.removeIngredientHandler}
       disabled= {disabledInfo}
       ordered={this.purchaseHandler}
       price={this.state.totalPrice}/>
      
      </Auxilary>
    );
  }
}
export default BurgerBuilder;
