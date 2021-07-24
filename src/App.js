import React from "react";
import OrderForm from "./components/OrderForm.js";
import { Route, Switch, Link } from "react-router-dom";
import HomePage from "./HomePage";
import axios from "axios";
import schema from "./components/formSchema.js";
import { useState } from 'react'
import { reach } from 'yup'




const initialFormValues = {
  name:''

}

const initialFormErrors = {
  name: ''
}





const App = () => {
  const [pizza, setPizza] = useState('')
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const addToPizza = newPizza =>{
    setPizza([newPizza, pizza])
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(()=>setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res =>{
      setPizza(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const inputChange = (name, value) =>{
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () =>{
    const newPizza = {
      name: formValues.name.trim(),


    }
    postNewOrder(newPizza)
  }

  return (
    <div className='header'>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/pizza'>
          <button>Home</button>
        </Link>
        <button>Help</button>
      </div>
      
  <Switch>
    <Route exact path='/'> 
      <HomePage />
    </Route>
    
    <Route path='/pizza'>
      <OrderForm
      postNewOrder={postNewOrder}
      addToPizza={addToPizza}
      errors={formErrors}
      change={inputChange}
      submit={formSubmit}
      />
    </Route>
  </Switch> 


    </div>
  );
};
export default App;
