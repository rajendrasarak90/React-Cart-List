import React from 'react';

const CartItem = (props)=>{
    
    const {title, price, qty, img} = props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img} alt="item_image"/> 
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: '#777'}}>Rs {price}</div>
                <div style={{color: '#777'}}>Qty : {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <i className="fa-solid fa-circle-plus action-icons" onClick={()=>onIncreaseQuantity(product)}></i>
                    <i className="fa-solid fa-circle-minus action-icons" onClick={()=>onDecreaseQuantity(product)}></i>
                    <i className="fa-solid fa-trash-can action-icons" onClick={()=>onDeleteQuantity(product)}></i>
                </div>
            </div>
        </div>
    );
}

const styles={
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;