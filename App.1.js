import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './app/components/Counter';
import Address from './app/components/Address';
import Cart from './app/components/Cart';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text>Open up App.js  React Native!</Text>
        <Cart />
        <Counter startValue={100} />
        <Address title="Office Address" address={{ street: 'Forum', city: 'BLR', state: 'Karnataka', pinCode: 1213 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    //justifyContent: 'center',
  },
});
