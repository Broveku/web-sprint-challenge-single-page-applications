import React from 'react';

function OrderForm(props) {
    return (
    <>
    <form>
        <div>
            <h2>Build Your Own Pizza</h2>
            <label>
                <input type='text' id='name-input'/>
            </label>
            <h3>Choice of Size</h3>
            <p></p>
        <div className='pizza-size'>
            <select name='PizzaSize'>
                <option value=''>---Select Size---</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
        </div>    
        <h3>Choice of Sauce</h3>
            <div className='sauces'>
                <label>
                    <input type='radio' id='originalRed' name='sauce' value='originalRed'/> Original Red
                </label>
                <label>
                    <input type='radio' id='garlicRanch' name='sauce' value='garlicRanch'/> Garlic Ranch
                 </label>
                 <label>
                    <input type='radio' id='BBQ' name='sauce' value='BBQ'/> BBQ Sauce
                </label>
                <label>
                    <input type='radio' id='spinachAlfredo' name='sauce' value='spinachAlfredo'/> Spinach Alfredo
                </label>
            </div>
        <h3>Add Toppings</h3>
            <div className='toppings'>
                <label>
                    <input type='checkbox' id='pepperoni' value= 'Pepperoni'/> Pepperoni
                </label>
                <label>
                    <input type='checkbox' id='sausage' value= 'Sausage'/> Sausage
                </label>
                <label>
                    <input type='checkbox' id='canadianBacon' value= 'Canadian Bacon'/> Canadian Bacon
                </label>                
                <label>
                    <input type='checkbox' id='spicyIS' value= 'Spicy Italian Sausage'/> Spicy Italian Sausage
                </label>                
                <label>
                    <input type='checkbox' id='grilledChicken' value= 'Grilled Chicken'/> Grilled Chicken
                </label>                
                <label>
                    <input type='checkbox' id='onions' value= 'Onions'/> Onions
                </label>                <label>
                    <input type='checkbox' id='greenPepper' value= 'Green Pepper'/> Green Pepper
                </label>                <label>
                    <input type='checkbox' id='dicedTomato' value= 'Diced Tomato'/> Diced Tomato
                </label>                <label>
                    <input type='checkbox' id='blackOlives' value= 'Black Olives'/> Black Olives
                </label>                <label>
                    <input type='checkbox' id='roastedGarlic' value= 'Roasted Garlic'/> Roasted Garlic
                </label>                <label>
                    <input type='checkbox' id='artichoke' value= 'Artichoke'/> Artichoke
                </label>                <label>
                    <input type='checkbox' id='threeCheese' value= 'Three Cheese'/> Three Cheese
                </label>                <label>
                    <input type='checkbox' id='pineapple' value= 'Pineapple'/> Pineapple
                </label>                <label>
                    <input type='checkbox' id='extraCheese' value= 'Extra Cheese'/> Extra Cheese
                </label>
            </div>

        <h3>Special Instruction</h3>
            <input type='text' placeholder='Anything else?'/>
        </div>
    </form>
    </>
    );
}

export default OrderForm;