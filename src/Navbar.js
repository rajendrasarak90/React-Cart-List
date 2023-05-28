import React from 'react'

const Navbar = (props)=>{
    return (
        <div style={styles.nav}>
            <h1 style={styles.titleHead}>CartList</h1>
            <div style={styles.cartIconContainer}>
                 <i style={styles.cartItem} className="fa-solid fa-cart-shopping"></i>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const styles = {
    titleHead:{
        position: 'absolute',
        left: '20px',
        fontWeight: 400,
        color: 'white',
        textShadow: '0px 1px 2px red'
    },
    cartItem:{
        fontSize: '30px',
        marginRight: 20,
        color: 'rgb(243, 202, 202)'
    },
    nav:{
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer:{
        position: 'relative',
        right: '10px'
    },
    cartCount:{
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: '0px',
        top: '-9px'
    }
};

export default Navbar;