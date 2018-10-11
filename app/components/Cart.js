import React from 'react';
import { View, Button, Text, Alert, StyleSheet } from 'react-native';
import CartList from './CartList';


export default class Cart extends React.Component {

    static navigationOptions = {
        title: 'Cart'
    }

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, name: 'Product 1', price: 100, qty: 1 },
                { id: 2, name: 'Product 2', price: 100, qty: 1 }
            ],
            amount: 0,
            totalItems: 0
        }

    }


    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        const item = {
            id: id,
            name: 'Prodcut' + id,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //add item into array
        const items = [...this.state.items, item];
        this.setState({ items: items });
    }

    empty = () => {
        const items = [];
        this.setState({ items: items })
    }

    dummy = () => {
        this.setState({ flag: true });
    }

    removeItem = (id) => {
        console.log('remove item from array', id);
        const items = this.state.items.filter(item => item.id != id);
        this.setState({ items: items })
    }

    updateItem = (id, qty) => {
        console.log('update', id, qty);
        const items = this.state.items.map(item => {
            if (item.id == id) {
                return { ...item, qty }
            }
            return item;
        });
        this.setState({ items });
    }

    goToCheckout = () => {
        // navigation is insrted by react navigation lib
        this.props.navigation.navigate('Checkout');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.actions}>
                    <Button style={styles.button} title="Add" onPress={this.addItem} />
                    <Button style={styles.button} title="Empty" onPress={this.empty} />
                    <Button style={styles.button} title="Press" onPress={this.dummy} />
                    <Button style={styles.button} title="Checkout" onPress={this.goToCheckout} />
                </View>
                <View style={styles.cartList}>
                    <CartList items={this.state.items} removeItem={this.removeItem} updateItem={this.updateItem} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'lightgrey',
        borderBottomWidth: 3,
        marginTop: 8
    },
    cartList: {
        flex: 9
    },

    button: {
        height: 30
    }
});