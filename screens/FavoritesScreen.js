import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import Meal from '../models/meal';
import { HeaderButtons , Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';

import { useSelector } from 'react-redux';


const Favorites = props =>{
    
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    if(favMeals.length === 0 || !favMeals){
        return(
            <View style={styles.content}>
            <Text> No favorites yet. Start adding some!</Text>
            </View>
        )
    }
    return(
        <MealList
        data = {favMeals}
        navigation= {props.navigation}
        />
    )
}

const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
   },
   content:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center'
   }
}) 


Favorites.navigationOptions = navData =>{
    return{
        headerTitle: 'Your Favorites',
    headerLeft: ()=>
    (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item
                title='Filters'
                iconName='navicon'
                onPress={() => {navData.navigation.toggleDrawer()}} />
        </HeaderButtons>
    )
}}
export default Favorites;

