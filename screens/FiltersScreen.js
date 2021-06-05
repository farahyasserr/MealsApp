import React, { useState , useEffect, useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import FiltersSwitch from '../components/FiltersSwitch';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals';
import CategoriesScreen from './CategoriesScreen';


const FilterScreen = props => {
    const {navigation} = props; //destructuring navigation so we can use it mn gher props. and add it to dependencies taht altol fl useEffect

    //we use useEffect to make sure en we don't send params unless el params di etghayar feha haga


    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);


    const dispatch = useDispatch();
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilters);
        dispatch(setFilters(appliedFilters));
        navigation.navigate('Categories');
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch]) //even though dispatch will never change as a dependency u still have to add it dk why

    useEffect(  () => {
        navigation.setParams({save: saveFilters})
    }, [saveFilters] )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.switchesContainer}>
                <FiltersSwitch
                    text="Gluten-Free"
                    value={isGlutenFree}
                    onValueChange={newValue => setIsGlutenFree(newValue)} />
                <FiltersSwitch
                    text="Lactose-Free"
                    value={isLactoseFree}
                    onValueChange={newValue => setIsLactoseFree(newValue)} />
                <FiltersSwitch
                    text="Vegan"
                    value={isVegan}
                    onValueChange={newValue => setIsVegan(newValue)} />
                <FiltersSwitch
                    text="Vegetarian"
                    value={isVegetarian}
                    onValueChange={newValue => setIsVegetarian(newValue)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'pink',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },

    switchesContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // marginVertical: 10
    },
})

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () =>
        (
            <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item
                    title='Filters'
                    iconName='navicon'
                    onPress={() => { navData.navigation.toggleDrawer() }} />
            </HeaderButtons>
        ),
        headerRight: () =>
        (
            <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item
                    title='Save'
                    iconName='check'
                    onPress={navData.navigation.getParam('save')} />  
                    {/* there's no arrow function fl onpress hena 3shan when i get el params asln it returns a function fa i don't need an arrow func */}
            </HeaderButtons>
        )
    }
}

export default FilterScreen;

