import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import DefaultText from '../components/DefaultText';

const MealItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal} style={styles.touchop}>
            <View style={styles.subcontainer}>
                <View style={styles.titleContainer}>
                    <ImageBackground source= {{uri: props.image}} style={styles.image} borderTopLeftRadius={20} borderTopRightRadius={20}> 
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.rowFlex}>
                    <DefaultText>{props.duration}min</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText style={styles.text}>{props.affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 30,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    rowFlex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    titleContainer:{
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        overflow: 'hidden'
    },
    touchop: {
        padding: 10,
        flex: 1,  //important 3shan to make them look equal
        margin: 10,
        elevation: 7,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius: 30,
        backgroundColor: "#ddd",
    },
    subcontainer:{
        alignItems: 'center'
    },
    text: {
        // textAlign: 'center',
        // marginBottom: 20 
        // color : 'blue',
        // fontSize: 30
    },
    image:{
        width: '100%',
        height: '100%',
    }
})

export default MealItem;
