import React, { Component } from 'react';


import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {
        items: []
    }

    addItem = (amount, name , price) => {
        let currentItems = this.state.items;
        //debugger;
        let existingItem = this.state.items.find(item => item.name === name)
        if(existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount, 
                name, 
                price
            }
            );
        }

        this.setState({items: currentItems});
        console.log(this.state);
    }

    render() {
        return <React.Fragment>
            <Navbar />
            <main className="main-container">
                <section className="product-container">
                    <Product
                        onAdd={() => this.addItem(1, "Tomaten", 2.99)}
                        image="/assets/img/tomatoes.jpg"
                        title="Tomaten"
                        description="Das sind frische Tomaten aus dem Gewächshaus Kaaks."
                    />
                    <Product
                        onAdd={() => this.addItem(1, "Gurken", 3.99)}
                        image="/assets/img/cucumbers.jpg"
                        title="Gurken"
                        description="Hier haben wir rustikale Gurken von Tante Ute."
                    />
                    <Product
                        onAdd={() => this.addItem(1, "Äpfel", 4.99)}
                        image="/assets/img/apples.jpg"
                        title="Äpfel"
                        description="Herrliche Äpfel aus dem Alten Land südlich der Elbe."
                    />
                    <Product
                        onAdd={() => this.addItem(1, "Birnen", 5.99)}
                        image="/assets/img/pears.jpg"
                        title="Birnen"
                        description="Diese Birnen kommen aus dem Garten von Lissi."
                    />
                </section>
                <ShoppingCart items={this.state.items}/>
            </main>
        </React.Fragment>;
    }
}

export default App; 