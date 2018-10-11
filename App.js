// App.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import {NavigationActions, DrawerActions} from 'react-navigation';

// fixme: move to index.js
// to pass store as context to all the containers component
import {Provider} from 'react-redux';
import store from './app/store';

import Counter from './app/components/Counter';
import Address from './app/components/Address';
import Cart from './app/components/Cart';
import Home from './app/components/Home';
import ProductList from './app/components/ProductList';
import Checkout from './app/components/Checkout';
import ReduxCounter from './app/components/ReduxCounter';
import ReduxFuncCounter from './app/containers/ReduxFuncCounter';
 
import {Ionicons, MaterialIcons } from '@expo/vector-icons';


import {createStackNavigator, 
        createBottomTabNavigator,
       // createDrawerNavigator
       } from 'react-navigation';

// returns a component
const StackNavigator = createStackNavigator({
  "Home": {
    screen: Home // component
  },
 

  Cart: {
    screen: Cart,
    //navigationOptions: { title: 'Cart'}
  },
  Checkout: {
    screen: Checkout
  },

  ReduxCounter: {
    screen: ReduxCounter
  },

  ReduxFuncCounter: {
    screen: ReduxFuncCounter
  },
  Counter: {
    screen: Counter
  }
},
    {
      initialRouteName: 'Home',
      /* The header config from HomeScreen is now here */
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    } );

// creates and returns component
const TabNavigator = createBottomTabNavigator({
                  Home: {
                    screen: StackNavigator
                  },

                  ProductList : {
                    screen: ProductList
                  },

                  Cart: {
                    screen: Cart
                  }
              }, 

              {
                navigationOptions: ({ navigation }) => ({
                  tabBarIcon: (props) => {
                    let { focused, horizontal, tintColor } = props;
                    //console.log("**Navigation ", navigation.state)
                    const { routeName } = navigation.state;
                   // console.log('Route name ',routeName)
                    let iconName;

                    if (routeName === 'Home') {
                      iconName = `ios-home${focused ? '' : '-outline'}`;
                    } else if (routeName === 'Cart') {
                      iconName = `ios-cart${focused ? '' : '-outline'}`;
                    } else if (routeName === 'ProductList') {
                      iconName = `ios-list-box${focused ? '' : '-outline'}`;
                    }

                    //console.log('icon name ', iconName);
            
                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
                     
                  },
                }),
                tabBarOptions: {
                  activeTintColor: 'red',
                  inactiveTintColor: 'green',
                },
              }

);


 

/*
  App is a parent component
  Counter, Address are child components
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    }
  }

  toggle = () => {
    this.setState({
      showCounter: !this.state.showCounter
    })
  }
 
  render() {
    return (
      <TabNavigator />
    );
  }
}


export default function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
