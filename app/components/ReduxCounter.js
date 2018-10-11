// ReduxCounter.js  ----Not recommanded
import React from 'react';

import { View, Text, Button, Alert } from 'react-native';
import store from '../store';
import * as actions from '../state/actions';

export default class ReduxCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    increment = () => {
        //return action object;
        const action = actions.increment(1);
        //sync
        console.log("counter before", store.getState());
        store.dispatch(action);
        console.log("counter before", store.getState());
    }

    decrement = () => {
        //return action object;
        const action = actions.decrement(1);
        //sync
        console.log("counter before", store.getState());
        store.dispatch(action);
        console.log("counter before", store.getState());
    }

    reset = () => {
        //return action object;
        const action = actions.reset();
        //sync
        console.log("counter before", store.getState());
        store.dispatch(action);
        console.log("counter before", store.getState());
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe(); // cancel redux subscription
    }
    render() {
        console.log('Template render');
        const state = store.getState();
        const counter = state.counter;
        return (
            <View>
                <Text style={{ fontSize: 30 }}> Redux Counter </Text>

                <Text style={{ fontSize: 20 }}>  Counter {counter}</Text>

                <Button onPress={this.increment}
                    title='Incr'
                ></Button>


                <Button onPress={this.decrement}
                    title='Decr'
                ></Button>

                <Button onPress={this.reset}
                    title='Reset'
                ></Button>



            </View>
        )
    }
}