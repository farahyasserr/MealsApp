import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = ({style, children}) =>{
    return <Text style={{...styles.text, ...style}}>{children} </Text>
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Open Sans',
        marginBottom: 20 ,
        color: 'black'
        // color: 'red'
    }
})

export default DefaultText;