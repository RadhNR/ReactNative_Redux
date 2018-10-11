import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CartItem from './CartItem';

export default class CartList extends React.Component {
    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps) {
        console.log("CartList componentWillReceiveProps")
        console.log("current props", this.props.items.length);
        console.log("next props..", nextProps.items.length)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update???")
        console.log("nextProps.items != this.props.items", nextProps.items != this.props.items)
        return nextProps.items != this.props.items;
    }

    render() {
        const { items, removeItem } = this.props;

        console.log('CartList render')
        return (
            <View>
                <ScrollView>
                    {items.map(item => (
                        <CartItem item={item} key={item.id} removeItem={removeItem} updateItem={this.props.updateItem}/>
                    ))}

                </ScrollView>
            </View>
        )
    }
}