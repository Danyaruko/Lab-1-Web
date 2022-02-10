import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './Home'
import Catalog from './Catalog'
import ItemPage from './ItemPage';
import SuccessPage from './CartComponents/SuccessPage';
import { useSelector } from 'react-redux';
import cart from "./cart";
import Checkout from './CartComponents/Checkout';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  var logged = useSelector((state) => state.logged)
  useEffect(() => {
    setIsAuth(logged)
  })


  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/catalog" component={Catalog}/>
        <Route exact path="/catalog/:name" component={ItemPage}/>
        <Route path="/catalog/filters/:filterName" exact component={Catalog} />
        <Route exact path="/cart" component={cart}/>
        <Route exact path="/cart/checkout" component={Checkout}/>
        <Route exact path="/cart/checkout/success" component={SuccessPage}/>
      </Switch>
    </Router>

  );
}

export default App;
