import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import MealsScreen from '../screens/MealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FilterScreen from '../screens/FiltersScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';


const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle:{
        fontFamily : 'Arial'
    },
    headerBackTitleStyle: {
        // fontFamily: 'Arial'  //this changes el styling bt3 el text el byzhar f ios only ma3 el back button
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
  };

const MealsNavigator = createStackNavigator(
    {
    Categories: {
        screen: CategoriesScreen,
    },
    Meals: {
        screen: MealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    // mode: 'modal',
    // initialRouteName: 'MealDetail', //btwadeny 3al screen di awel haga 
    defaultNavigationOptions: defaultStackNavOptions
});

const FavoritesNavigator = createStackNavigator(
    {
        Favorites:{
            screen: FavoritesScreen,
        },
        MealDetail: {
            screen: MealDetailScreen
        }
    }
    , {
        defaultNavigationOptions: defaultStackNavOptions
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo)=>{
                return <Icon name='cutlery' size={24} color= {tabInfo.tintColor}/>
            }
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions:{
            // tabBarLabel: 'Favorites!!',
            tabBarIcon: (tabInfo)=>{
                return <Icon name='heart' size={24} color= {tabInfo.tintColor}/>
            }
        }
    }
 
},
    {
        navigationOptions:{
            drawerLabel: 'Meals!!',
        },
        tabBarOptions: {
            // activeBackgroundColor: '#ddd',
            activeTintColor: Colors.accentColor,
            
        }
    }
);

const FiltersNavigator = createStackNavigator(
    {Filters: FilterScreen}
    , {
        navigationOptions:{
            drawerLabel: 'Filters!!'
        },
        defaultNavigationOptions: defaultStackNavOptions
})


const MainNavigator = createDrawerNavigator({
    Meals : MealsFavTabNavigator,
    Filters : FiltersNavigator
},{
contentOptions:{
    activeTintColor: Colors.accentColor
}}
)


export default createAppContainer(MainNavigator);