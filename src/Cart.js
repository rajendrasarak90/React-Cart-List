import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor () {
        super();
        this.state = {
            products:[
                {
                    title: 'Smart Phone',
                    price: 999,
                    qty: 3,
                    img: '',
                    id: 1
                },
                {
                    title: 'Watch',
                    price: 599,
                    qty: 2,
                    img: '',
                    id: 2
                },
                {
                    title: 'Shoes',
                    price: 399,
                    qty: 30,
                    img: '',
                    id: 3
                },
                {
                    title: 'Galaxy Tab',
                    price: 6899,
                    qty: 2,
                    img: '',
                    id: 4
                },
                {
                    title: 'T-Shirt',
                    price: 299,
                    qty: 50,
                    img: '',
                    id: 5
                }
            ]
            
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                <h2>Your Cart</h2>
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id}/>
                })}
                
            </div>
        )
    }
}

export default Cart;