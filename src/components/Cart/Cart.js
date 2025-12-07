import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }

    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <br/>
            <p>Total Price: ${total.toFixed(2)}</p>
            <button className="btn btn-primary">Checkout</button>
        </div>
    );
};

export default Cart;