import React, { useState } from 'react';




function OrderForm({ postNewOrder,addToPizza, errors, change, submit}) {

    const [formData, setFormData] = useState({
        name: '', 
        size: '',
        sauce:'',
        special: '',
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        topping5: false,
        topping6: false,
        topping7: false,
        topping8: false,
        topping9: false,
        topping10: false,
        topping11: false,
        topping12: false,
        topping13: false,
        topping14: false,  

    })


    const handleInput = (evt =>{
        const target = evt.target
        const value = target.value
        const name = target.name
        const type = target.type

        if (type === 'checkbox'){
           return setFormData({...formData, [name]:target.checked })
            
    }

        setFormData({...formData, [name]: value})
        if (name === 'name')change(name, value)
        
    })
// console.log(formData)


    const onSubmit = (evt)=>{
        evt.preventDefault()
        const {name, size, sauce, special, topping1, topping2, topping3, topping4, topping5, topping6, topping7, topping8, topping9, topping10, topping11, topping12, topping13, topping14  } = formData
        let newPizza = {name, size, sauce, special, topping1, topping2, topping3, topping4, topping5, topping6, topping7, topping8, topping9, topping10, topping11, topping12, topping13, topping14 }
        addToPizza(newPizza)
        postNewOrder(newPizza)
        console.log(newPizza)
        setFormData({
            name: '', 
            size: '',
            sauce:'',
            special: '',
            topping1: false,
            topping2: false,
            topping3: false,
            topping4: false,
            topping5: false,
            topping6: false,
            topping7: false,
            topping8: false,
            topping9: false,
            topping10: false,
            topping11: false,
            topping12: false,
            topping13: false,
            topping14: false,
              
        })
        submit()
        

    }

    return (
    <>
    <form id='pizza-form' onSubmit={onSubmit}>
        <div>
            <h2>Build Your Own Pizza</h2>
            <label>Name:
                <input type='text' id='name-input' name='name' value={formData.name} onChange={handleInput}/>
            </label>
            <p>{errors.name}</p>
            <h3>Choice of Size</h3>
            
        <div className='pizza-size'>
            <select id='size-dropdown' name='size' onChange={handleInput}>
                <option value=''>---Select Size---</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
        </div>    
        <h3>Choice of Sauce</h3>
            <div className='sauces'>
                <label>
                    <input type='radio' id='originalRed' name='sauce' value='Original Red' onChange={handleInput}/> Original Red
                </label>
                <label>
                    <input type='radio' id='garlicRanch' name='sauce' value='Garlic Ranch' onChange={handleInput}/> Garlic Ranch
                 </label>
                 <label>
                    <input type='radio' id='BBQ' name='sauce' value='BBQ' onChange={handleInput}/> BBQ Sauce
                </label>
                <label>
                    <input type='radio' id='spinachAlfredo' name='sauce' value='Spinach Alfredo' onChange={handleInput}/> Spinach Alfredo
                </label>
            </div>
        <h3>Add Toppings</h3>
            <div className='toppings'>
                <label>
                    <input type='checkbox' name='topping1' value= 'Pepperoni' onChange={handleInput}/> Pepperoni
                </label>
                <label>
                    <input type='checkbox' name='topping2' value= 'Sausage' onChange={handleInput}/> Sausage
                </label>
                <label>
                    <input type='checkbox' name='topping3' value= 'Canadian Bacon' onChange={handleInput}/> Canadian Bacon
                </label>                
                <label>
                    <input type='checkbox' name='topping4' value= 'Spicy Italian Sausage' onChange={handleInput}/> Spicy Italian Sausage
                </label>                
                <label>
                    <input type='checkbox' name='topping5' value= 'Grilled Chicken' onChange={handleInput}/> Grilled Chicken
                </label>                
                <label>
                    <input type='checkbox' name='topping6' value= 'Onions' onChange={handleInput}/> Onions
                </label>                <label>
                    <input type='checkbox' name='topping7' value= 'Green Pepper' onChange={handleInput}/> Green Pepper
                </label>                <label>
                    <input type='checkbox' name='topping8' value= 'Diced Tomato' onChange={handleInput}/> Diced Tomato
                </label>                <label>
                    <input type='checkbox' name='topping9' value= 'Black Olives' onChange={handleInput}/> Black Olives
                </label>                <label>
                    <input type='checkbox' name='topping10' value= 'Roasted Garlic' onChange={handleInput}/> Roasted Garlic
                </label>                <label>
                    <input type='checkbox' name='topping11' value= 'Artichoke' onChange={handleInput}/> Artichoke
                </label>                <label>
                    <input type='checkbox' name='topping12' value= 'Three Cheese' onChange={handleInput}/> Three Cheese
                </label>                <label>
                    <input type='checkbox' name='topping13' value= 'Pineapple' onChange={handleInput}/> Pineapple
                </label>                <label>
                    <input type='checkbox' name='topping14' value= 'Extra Cheese' onChange={handleInput}/> Extra Cheese
                </label>
            </div>

        <h3>Special Instruction</h3>
            <input type='text' 
            id='special-text' 
            name='special'
            placeholder='Anything else?'
            onChange={handleInput}/>
        </div>
        <button id="order-button">Add to Order</button>
    </form>
    </>
    );
}

export default OrderForm;