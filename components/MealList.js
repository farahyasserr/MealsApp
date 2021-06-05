import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import MealItem from './MealItem';

const MealList = ({ navigation, data }) => {
    
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <MealItem
                    title= {item.title}
                    duration = {item.duration}
                    affordability = {item.affordability}
                    complexity = {item.complexity}
                    image = {item.imageURL}
                    onSelectMeal={() => {
                        navigation.navigate({
                            routeName: 'MealDetail',
                            params: {
                                MealIDbta3y: item.id
                            }
                        })
                    }}
                />
            )}/>

    )
}

const styles = StyleSheet.create({
    touchop: {
        // padding: 10,
        flex: 1,  //important 3shan to make them look equal
        margin: 10,
        elevation: 7,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius: 30,
        // overflow: 'hidden'
    },
    text: {
        textAlign: 'center',
        marginVertical: 50,
    }
})

export default MealList;


