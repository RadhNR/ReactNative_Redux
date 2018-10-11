import React from 'react';
import { View, Button, Text, Alert } from 'react-native';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        //Alert.alert('Increment');
        this.state.counter++;
        this.forceUpdate();
    }

    decrement = () => {
        console.log('counter befor', this.state.counter)
        this.setState({
            counter: this.state.counter - 1
        });
        console.log('counter after', this.state.counter)
    }

    render() {

        const { startValue } = this.props;
        console.log('counter render', this.state.counter)
        return (
            <View>
                <Text>Counter : {this.state.counter}</Text>
                <Text>Start Value: {startValue}</Text>
                <Button onPress={this.increment} title="Incr" />
                <Button onPress={this.decrement} title="Decr" />
            </View>
        )
    }
}