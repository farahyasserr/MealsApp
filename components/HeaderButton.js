import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform , StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const MyHeaderButton = props =>{
    return(
        <HeaderButton 
        {...props}
        IconComponent={Icon}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
    )
}

const styles= StyleSheet.create({
   
}) 

export default MyHeaderButton;
