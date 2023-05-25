import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    render(){
        return(
            <div className="cart">
                <h2>Your Cart</h2>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        )
    }
}

export default Cart;