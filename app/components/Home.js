// Home.js
import React from 'react';

import { View, Text, Button, Alert } from 'react-native';

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home'
    }
    constructor(props) {
        super(props);
    }

    goToPage = (pageName) => {
        console.log(pageName);
        // navigation is insrted by react navigation lib
        const params = {
            coupon: 'Save50',
            fromScreen: 'Home',
            address: {city: 'Blr', state: 'KA'}
        }
        this.props.navigation.navigate(pageName, params);
    }
    render() {
        console.log('Home render');

        return (
            <View>
                <Text style={{ fontSize: 30 }}> Home </Text>
                <Button title="Cart" onPress={() => this.goToPage('Cart')} />
                <Button title="Checkout" onPress={() => this.goToPage('Checkout')} />
                <Button title="Counter" onPress={() => this.goToPage('Counter')} />
                <Button title="ReduxCounter" onPress={ () => this.goToPage('ReduxCounter')} />
                <Button title="ReduxFuncCounter" onPress={() => this.goToPage('ReduxFuncCounter')} />

                
            </View>
        )
    }
}