
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar'
import React from 'react';

class App extends React.Component{
  constructor () {
    super();
    this.state = {
        products:[
          {
              title: 'Smart Phone',
              price: 999,
              qty: 3,
              img: 'https://vlebazaar.in/image/cache/catalog/B06ZXWWD6R/Apple-iPhone-SE-Rose-Gold-2GB-RAM-32GB-Storage-B06ZXWWD6R-1000x1000h.jpg',
              id: 1
          },
          {
              title: 'Watch',
              price: 599,
              qty: 2,
              img: 'https://m.media-amazon.com/images/I/81nC4u9eYfL._SL1500_.jpg',
              id: 2
          },
          {
              title: 'Shoes',
              price: 399,
              qty: 30,
              img: 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg',
              id: 3
          },
          {
              title: 'Galaxy Tab',
              price: 6899,
              qty: 2,
              img: 'https://m.media-amazon.com/images/I/61vsK7h3zVL._SX450_.jpg',
              id: 4
          },
          {
              title: 'T-Shirt',
              price: 299,
              qty: 50,
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
              id: 5
          },
          {
              title: 'Laptop',
              price: 34999,
              qty: 2,
              img: 'https://img5.gadgetsnow.com/gd/images/products/additional/original/G221395_View_1/computer-laptop/laptops/lenovo-ideapad-slim-3i-81wq003lin-intel-celeron-n4020-integrated-4gb-256gb-ssd-windows-10-home-basic.jpg',
              id: 6
          }
      ]
        
    }
    // if we don'nt use flat arrow function => this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  handleIncreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({products: products});
  }
  handleDecreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty > 0){
        products[index].qty -= 1;
    }else{
        return;
    }
    this.setState({products: products});
  }
  handleDeleteQuantity = (product) =>{
    const {products} = this.state;
    const items = products.filter((item)=> item.id !== product.id);
    this.setState({products: items});
  }
  getCartCount = ()=>{
    let count = 0;
    const {products} = this.state;
    products.forEach((item)=>{
      count += item.qty;
    });
    return count;
  }
  getTotalPrice = () =>{
    let total = 0;
    const {products} = this.state;
    products.forEach((item)=>{
      total += item.qty * item.price;
    });
    return total;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}/>
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteQuantity = {this.handleDeleteQuantity}
          totalPrice = {this.getTotalPrice()}/>
      </div>
    );
  }
}

export default App;
