// Checkout.js
import React from 'react';

import { View, Text, Button, Alert } from 'react-native';

export default class Checkout extends React.Component {
    static navigationOptions = {
        title: 'Checkout'
    }

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Checkout render');
        const coupon = this.props.navigation.getParam('coupon', 'Save0');
        const fromScreen = this.props.navigation.getParam('fromScreen', 'Save0');
        const address = this.props.navigation.getParam('address', {city: 'unknown'});
        return (
            <View>
                <Text style={{ fontSize: 30 }}> Checkout </Text>
            <Text>Coupon: {coupon}</Text>
            <Text>Address: {address.city}</Text>
            </View>
        )
    }
}