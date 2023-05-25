import React from 'react';


class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            qty: 3,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = ()=>{
        console.log('this', this.state);
    }
    render(){
        const {title, price, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/> 
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <i className="fa-solid fa-circle-plus action-icons" onClick={this.increaseQuantity}></i>
                        <i className="fa-solid fa-circle-minus action-icons"></i>
                        <i className="fa-solid fa-trash-can action-icons"></i>
                    </div>
                </div>
            </div>
        );
    }
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