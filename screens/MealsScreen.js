//what we see when we tap on a single category
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';  //state management
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const MealsScreen = props => {

    const MEALS = useSelector(state => state.meals.filteredMeals);  
    //state.meals.meals explanation: state di el state el gayaly el abl el arrow, 
    //meals el awlneya da esm el reducer bta3y fl root reducer fl app.js el ana sameto
    //filteredMeals el tanya di fel meals.js file el ana edtha el esm dh fl initial state

    const catID = props.navigation.getParam('categoryIDbta3y');
    const selectedCategory = CATEGORIES.find(categ => categ.id === catID);

    const displayedMeals = MEALS.filter(meal => meal.categoryIDs.indexOf(catID) >= 0);

    if (displayedMeals.length ===0) {
        return (
            <View style={styles.content}>
                <DefaultText>No meals available with given filters</DefaultText>
            </View>
        )
    }
    else{
        return (

            <MealList
                data={displayedMeals}
                navigation={props.navigation}
    
            />
        )
    }
  
}

MealsScreen.navigationOptions = ({ navigation }) => {
    const catID = navigation.getParam('categoryIDbta3y');
    const selectedCategory = CATEGORIES.find(categ => categ.id === catID);

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        textAlign: 'center',
        marginVertical: 50,
    },
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealsScreen;

