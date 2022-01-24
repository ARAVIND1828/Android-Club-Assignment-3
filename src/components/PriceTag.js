import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


class PriceTag extends Component{
    render() {
        return(
            <Text style={styles.priceText}>Price</Text>
        )
    }
}

const styles = StyleSheet.create({
    priceText: {
        fontSize: 48,
        fontWeight: '300',
        color: 'rgb(185,104,199)'
    }
})

export default PriceTag;