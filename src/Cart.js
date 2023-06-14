import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    
    const {products, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = props;
    return(
        <div className="cart">
            <h2>Your Cart</h2>
            
            {products.map((product)=>{
                return <CartItem
                product={product} 
                key={product.id} 
                onIncreaseQuantity = {onIncreaseQuantity}
                onDecreaseQuantity = {onDecreaseQuantity}
                onDeleteQuantity = {onDeleteQuantity}/>
            })}
            
        </div>
    );
}



export default Cart;