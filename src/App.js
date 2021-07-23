import React from "react";
import OrderForm from "./components/OrderForm.js";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div className='header'>
      <h1>Lambda Eats</h1>
      <div>
        <button>Home</button>
        <button>Help</button>
      </div>
      
  <Switch>
    <Route exact path='/'> 
      <HomePage />
    </Route>
    
    <Route path='/pizza'>
      <OrderForm/>
    </Route>
  </Switch> 


    </div>
  );
};
export default App;
