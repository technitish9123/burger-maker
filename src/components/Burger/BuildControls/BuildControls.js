import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
   <p> Current Price: </p><strong> rs:{props.price} </strong>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        
        added={()=> props.ingredientAdded(ctrl.type)}
        removed= {()=> props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
     className={classes.OrderButton}
     onClick={props.ordered}
     > Order Now</button>
    
  </div>
  
);
export default BuildControls;
