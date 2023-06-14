
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import firebase from './index';

class App extends React.Component{
  constructor () {
    super();
    this.state = {
      products:[],
      loading: true
    }
    this.db = firebase.firestore();
    // if we don'nt use flat arrow function => this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  componentDidMount(){
    this.db.collection('products')
    .onSnapshot((snapshot) => { 
      // console.log(snapshot);

      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(products);
      this.setState({ 
        products,
        loading: false
       });
    });
  }

  handleIncreaseQuantity = (product) =>{
    // const {products} = this.state;
    // const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({products: products});

    const docRef = this.db.collection('products').doc(product.id);
    docRef.update({ qty: product.qty + 1 })
    .then(()=>{console.log("updated successfuly")})
    .catch((err)=>{console.log("error", err)})
  }

  handleDecreaseQuantity = (product) =>{
    // const {products} = this.state;
    // const index = products.indexOf(product);
    // if(products[index].qty > 0){
    //     products[index].qty -= 1;
    // }else{
    //     return;
    // }
    // this.setState({products: products});

    const docRef = this.db.collection('products').doc(product.id);
     if(product.qty > 0){
      docRef.update({ qty: product.qty - 1})
      .then(()=>{console.log("updated successfuly")})
      .catch((err)=>{console.log("error", err)})
    }
  }

  handleDeleteQuantity = (product) =>{
    // const {products} = this.state;
    // const items = products.filter((item)=> item.id !== product.id);
    // this.setState({products: items});
    const docRef = this.db.collection('products').doc(product.id);
    docRef.delete()
    .then(()=>{console.log("Deleted Successfuly")})
    .catch((err)=>{console.log("error", err)})
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

  addProduct = ()=>{
    this.db.collection('products')
    .add({
      img: '',
      price: 500,
      qty: 3,
      title: 'Washing Machine'
    })
    .then((docRef) => {
      console.log("document has been added", docRef);
    })
    .catch((error) => {
      console.log("Error: ", error);
    })
  }

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}/>
        <button style={{padding: '5px', margin: '5px', fontSize: '20px',background: '#ffa07a', cursor: 'pointer'}} onClick={this.addProduct}>Add Product</button>
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteQuantity = {this.handleDeleteQuantity}
          />
          {loading && <h1>Loading Products...</h1>}
          <p style={styles.totalPrice}>Total Price = {this.getTotalPrice()}</p>
      </div>
    );
  }
}

const styles = {
  totalPrice:{
      fontSize: '1.3rem',
      fontWeight: 500,
      padding: '10px',
  }
}
export default App;
