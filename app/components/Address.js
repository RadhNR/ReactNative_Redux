import React from 'react';
import { View, Text } from 'react-native';

export default function Address(props) {
    const { title, address } = props;
    return (
        <View>
            <Text>{title}</Text>
            <Text>Street: {address.street}</Text>
            <Text>City: {address.city}</Text>
            <Text>State:{address.state}</Text>
            <Text>Pincode: {address.pinCode}</Text>
        </View>
    )
}