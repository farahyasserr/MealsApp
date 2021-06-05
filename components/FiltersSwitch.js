import { View, Switch, Text, StyleSheet } from "react-native"
import React from 'react';
import Colors from '../constants/Colors';


const FiltersSwitch = ({text , value, onValueChange}) => {
    return (
        <View  style={styles.switchesContainer}>
            <Text style={styles.text}>{text}</Text>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: '#ddd', true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''} />
                {/* //in thumb color, empty string will make it use the default color */ }

        </View>
        )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16
    },
    switchesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        marginVertical: 10
    },
})

export default FiltersSwitch;