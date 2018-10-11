// ProductList.js
import React from 'react';

import { View, Text, Button, Alert, FlatList } from 'react-native';

// functional component
const ProductItem = ({item}) => {
    return (<View>
        <Text>{item.name}</Text>
    </View>
    )
};

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('https://nodesense.github.io/api/products.json')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(products => {
                console.log(products);
                this.setState({ products });
            }).catch(err => {
                console.log(err);
            })
    }

    productKeyExtractor = (item) => item.id.toString(); // product.id
    render() {
        console.log('ProductList render');

        return (
            <View>
                <Text style={{ fontSize: 30 }}> Product List </Text>
                <FlatList keyExtractor={this.productKeyExtractor} data={this.state.products} renderItem={({ item }) => (
                    <ProductItem item={item}/>
                )} />
            </View>
        )
    }
}