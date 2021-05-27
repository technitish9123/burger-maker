import React from "react";
import Aux from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from  './Layout.css';

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.Container}>
      {props.children}
      hello
    </main>
  </Aux>
);

export default Layout;
