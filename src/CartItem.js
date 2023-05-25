import React from 'react';


class CartItem extends React.Component{
   
    increaseQuantity = ()=>{
        // console.log('this', this.state);
        // stateForm 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        // stateForm 2
        this.setState((prevState)=>{
            return{
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = ()=>{
        if(this.state.qty > 0){
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }
    render(){
        const {title, price, qty} = this.props.product;
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
                        <i className="fa-solid fa-circle-minus action-icons" onClick={this.decreaseQuantity}></i>
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