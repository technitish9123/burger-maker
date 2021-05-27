import React from 'react';

//import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger = (props)=>{
    // converting object into array by using object  
    let transformedIngredients=Object.keys(props.ingredients)
        .map(igKey=>{
            return[...Array(props.ingredients[igKey])].map((_, i)=>{
          return  <BurgerIngredient key={igKey+i} type={igKey} />;
        })

        })
        //reduce is an built in function which is used to transform array in something else
      //takes function as  input and takes 2 argument.
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[]);

        if(transformedIngredients.length===0){
           transformedIngredients=<p> please start adding ingredient</p> ; 
        }

console.log(transformedIngredients);
return(
    <div className= {classes.Burger}>
       <BurgerIngredient type="bread-top" />
       {transformedIngredients}
       <BurgerIngredient type="bread-bottom" />
    </div>
);
 
};
export default Burger;