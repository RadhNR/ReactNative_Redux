import React from 'react';
import { View, Button, Text, Alert, StyleSheet, Slider } from 'react-native';

//PureComponent - it has shouldComponent already implemented
// shallow compare: check 2 references
// Deep compare: check the each properties 
// compare nextProps with this.props
// compare nectState with this.state
// return true if any difference , then call render
// return false, doesnt call render

export default class CartItem extends React.PureComponent {
    constructor() {
        super();
        console.log('CartItem const')
    }

    componentWillMount() {
        console.log("will componentWillMount")
    }

    componentDidMount() {
        console.log("will componentDidMount")
    }


    componentWillUnmount() {
        console.log("..............will componentWillunMount")
    }



    render() {
        const { item } = this.props;
        console.log('CartItem render', item.id)
        return (
            <View style={styles.container}>
                <View style={styles.details}>
                    <Text style={{paddingLeft: 10}}>Product Name: {item.name}</Text>
                    <Text style={{fontWeight: 'bold'}}>Price: ${item.price}</Text>
                    <Text style={{paddingRight: 10}}>Qty: {item.qty}</Text>
                </View>
                <View style={styles.actionButtons}>
                    <Button onPress={() => this.props.removeItem(item.id)} title="Remove" />
                    <Slider style={styles.slider} onValueChange={ (value) => { this.props.updateItem(item.id, value)}} value={item.qty} step={1} minimumValue={1} maximumValue={10}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderBottomWidth: 1
    },
    details: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //marginLeft: 10,
        //marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    actionButtons: {
        flex: 1,
        flexDirection: 'row'
    },
    slider: {
        flex:2
    }
});