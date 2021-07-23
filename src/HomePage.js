import React from 'react';
import { Link } from 'react-router-dom'

function HomePage(props) {
    return (
        <div className='home-page'>
            <div className='home-header'>
                <h1>Your Favorite Food, Delivered While Coding</h1>
                <Link to='/pizza'>
                    <button id= 'order-pizza'>Pizza</button>
                </Link>
            </div>
            
        </div>
    );
}

export default HomePage;