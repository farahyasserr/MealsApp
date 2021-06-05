//what we see when we press on a single meal
import React , {useEffect , useCallback} from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {useSelector , useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';


const MealDetailScreen = props => {
    const AllMeals = useSelector(state => state.meals.meals);
    const MealID = props.navigation.getParam('MealIDbta3y');

    const isCurrentMealFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === MealID))
    //.some() returns true if the condition satisfies atleast one item
    const selectedMeal = AllMeals.find(Meal => Meal.id === MealID);


    const dispatch = useDispatch();

    const toggleFavoriteHandler= useCallback(()=>{
        dispatch(toggleFavorite(MealID))
    }, [dispatch, MealID]);  //useCallback is to prevent entering an infinite loop

    useEffect(() => {
        props.navigation.setParams({mealTitle: selectedMeal.title});
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({isFav: isCurrentMealFavorite})
    }, [isCurrentMealFavorite])

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: selectedMeal.imageURL }} style={styles.image} />

            <View style={styles.details}>

                <DefaultText>{selectedMeal.duration}min</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText style={styles.text}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <View style={styles.subcontainer}>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ing => <Text style={styles.listItem} key={ing}>{ing}</Text>)}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step => <Text style={styles.listItem} key={step}>{step}</Text>)}
            </View>
            {/* <Button title="Go back khales" onPress={() => { props.navigation.popToTop() }} /> */}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navData => {
    const toggleFavorite = navData.navigation.getParam('toggleFav');
    const mealTitle = navData.navigation.getParam('mealTitle');

    const isFavorite = navData.navigation.getParam('isFav');
    //const MealID = navData.navigation.getParam('MealIDbta3y');
    // const selectedMeal = MEALS.find(meal => meal.id === MealID);

    return {
        headerTitle: mealTitle ,  //we put mealTitle 3ltol badl selectedMeal.title
        headerRight: () =>
        (
            <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item
                    title='Favorites'
                    iconName= {isFavorite? 'star': 'star-o'}
                    onPress={toggleFavorite} />
            </HeaderButtons>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    details: {
        flexDirection: 'row',
        flex: 1,
        // backgroundColor: 'red',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    image: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    subcontainer: {
        flex: 1,
        // backgroundColor: 'blue'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    listItem:{
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen;

