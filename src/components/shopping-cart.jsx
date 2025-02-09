import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = {}


    render() {
        return <aside className="shopping-cart">
                    <h2>Warenkorb</h2>
                    { this.props.items.map(item => <p key={item.name}>{item.amount}x {item.name}: {item.price} €</p>) }
                </aside>;
    }
}

export default ShoppingCart;