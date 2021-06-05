import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return (

        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>

    )

}


// <Card>
//     <Text>Hello</Text>                       -------->  These are
//     <Text>Hello again!</Text>                -------->  the children
// </Card>

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ddd',
        elevation: 7,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius: 30,
    },
    cardContent: {
        marginHorizontal: 18,
        // alignItems: 'center'
    }
})