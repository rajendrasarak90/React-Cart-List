import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    
    const {products, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity, totalPrice} = props;
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
            
            <p style={styles.totalPrice}>Total Price = {totalPrice}</p>
            
        </div>
    );
}

const styles = {
    totalPrice:{
        fontSize: '1.3rem',
        fontWeight: 500,
        padding: '10px'
    }
}

export default Cart;